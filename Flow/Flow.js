class Flow {
    constructor() {
        this.clock = 30;

        this.score = new Score();

        this.deletionAge = 200;

        this.inputText = "";
        this.outputText = "";

        this.nodes = {};
        this.connectionChances = {};
    }

    addNode(id) {
        this.connectionChances[id] = {};
        this.nodes[id] = new Node(id);
        //console.log(this.nodes);
        //console.log(this.connectionChances);
    }

    deleteNode(id) {
        delete this.connectionChances[id];
        delete this.nodes[id];
    }

    setChance(id1, id2, chance) {
        // console.log(`Setting chance for [${id1}][${id2}]:`, chance);
        this.connectionChances[id1][id2] = chance;
    }

    getChance(id1, id2) {
        return this.connectionChances[id1][id2] || 50;
    }

    clearNode(id) {
        //Go through all letter chances (A-Z) (2x)
        for(let i of ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]) {
            this.nodes[id].letterChances1[i] = 50;
            this.nodes[id].letterChances2[i] = 50;
        }
        //Go through all connection chances (go through all node ids 2D without -2 and -1)
        let allIds = Object.keys(this.nodes);

        for(let i = 0; i < allIds.length; i++) {
            for(let j = 0; j < allIds.length; j++) {
                if(id == allIds[i] || id == allIds[j]) {
                    this.setChance(allIds[i], allIds[j], 50);
                }
            }
        }
        //Set all to 50
    }


    init() {
        // Create IN and OUT nodes
        // IN always has id -2 and OUT always -1    Both can be connected to
        this.addNode(-2);
        this.addNode(-1);
    }



    setScore() {
        let input = this.nodes[-2].value;
        let output = this.nodes[-1].value;

        if(input == "nothing") {
            if(input == output) {
                this.score.setCorrectNothingScore();
            } else {
                this.score.setIncorrectNothingScore();
            }
        } else {
            if(input == output) {
                this.score.setCorrectScore();
            } else {
                this.score.setIncorrectScore();
            }
        }
    }

    

    updateChances() {
        //get all node ids
        let allIds = Object.keys(this.nodes);
        //console.log(Object.keys(this.nodes));

        //Loop through each node:
        //get selected stuff of each node and where it is
        //update all the stuff

        //Limit update values at 0% and 100%
        for(let i = 0; i < allIds.length; i++) {
            //Get all
            let letter1 = this.nodes[allIds[i]].chosenLetter1;
            let letter2 = this.nodes[allIds[i]].chosenLetter2;
            let connections = this.nodes[allIds[i]].chosenConnections;

            let nodeScore = this.score.score;

            //Update chances
            this.nodes[allIds[i]].letterChances1[letter1] = this.chanceLimit(this.nodes[allIds[i]].letterChances1[letter1], nodeScore, allIds[i]);

            this.nodes[allIds[i]].letterChances2[letter2] = this.chanceLimit(this.nodes[allIds[i]].letterChances2[letter2], nodeScore, allIds[i]);
            //console.log(connections);

            //DEPENDS ON HOW CHOSEN CONNECTIONS ARE STORED ->Done
            //How the fuck do i check here and is that correct because isnt comnections a dict (dict[j] might not get all nodes id ones were deleted?)
            for(let j = 0; j < connections.length; j++)
            {
                // console.log(this.getChance(connections[j][0], connections[j][1]));
                //This is still wrong somehow (error) Is this now still wrong???? -> tests
                this.setChance(connections[j][0], connections[j][1], this.chanceLimit(this.getChance(connections[j][0], connections[j][1]), nodeScore, connections[j][0]));
            }
        }
    }

    chanceLimit(currentChance, nodeScore, id) {
        let correctChance = 0;

        if((id == -1) || (id == -2)) {
            if(currentChance + nodeScore >= 90) {
                correctChance = 90;
            } else if(currentChance + nodeScore <= 10) {
                correctChance = 10;
            } else {
                correctChance = currentChance + nodeScore;
            }
        } else {
            if(currentChance + nodeScore >= 100) {
                correctChance = 100;
            } else if(currentChance + nodeScore <= 0) {
                correctChance = 0;
            } else {
                correctChance = currentChance + nodeScore;
            }
        }

        return correctChance
    }


    manageNodes() {
        //Exclude node -1 and -2

        //Create new nodes
        //Delete Nodes

        //Object.values(dict).includes(value); 

        //Rules:
        //(Maybe do with case statements)
        //Delete on 100%/0% for any chance in a node and a certain age that it has to reach

        //Go through all nodes and first look if the required age is reached yet
        //Then go through all both letter nd the connection chnaces and see if any is at 0 or 100
        //If yes then delete otherwise leave
        let allIds = Object.keys(this.nodes);
        //console.log(Object.keys(this.nodes));


        for(let i = 0; i < allIds.length; i++) {
            if((allIds[i] == -1) || (allIds[i] == -2)) {
                if(Object.values(this.nodes[allIds[i]].letterChances1).includes(0) || Object.values(this.nodes[allIds[i]].letterChances1).includes(100) || Object.values(this.nodes[allIds[i]].letterChances2).includes(0) || Object.values(this.nodes[allIds[i]].letterChances2).includes(100)) {
                    // this.deleteNode(allIds[i]);
                    // this.addNode(allIds[i]);

                    this.clearNode(allIds[i]);

                    console.log("Delete");
                }
            }
        }

        //filter for connections that are 0 or 100 and remove the nodes
        //I think this will not work correctly
        let keys = [];
        for(let i in this.connectionChances) {
            for(let j in this.connectionChances) {
                if ((this.connectionChances[i][j] == 100) || (this.connectionChances[i][j] == 0)) {
                    keys.push(i);  // Collects ALL: ['a', 'c']
                }
            }
        }
        for(let i = 0; i < keys.length; i++) {
            // this.deleteNode(keys[i]);
            // this.addNode(keys[i]);

            this.clearNode(keys[i]);

            console.log("Delete");
        }




        //Create: To have a constant population that can be controlled???? -> please no more variables
        //Or (has to be just one number of how many to create)

        //For now just keep a constant population

    }

    rerollConnections() {
        //Exclude Node id -1
        //Go through all possible connections from dictionary (use double for loop with nodeids)
        //Decide if connect according to chances  (use getChance)
        //save the decision in chosenConnections  (use setChance)
        let allIds = Object.keys(this.nodes);
        //console.log(Object.keys(this.nodes));


        //2D loop
        for(let i = 0; i < allIds.length; i++) {
            ///Do i also not have to set all connections chosen array to nothing again?????
            this.nodes[allIds[i]].chosenConnections = [];

            for(let j = 0; j < allIds.length; j++) {
                let currentChance = this.getChance(allIds[i], allIds[j]);

                //Decide with random
                if(((Math.random() * 100) < currentChance) && (allIds[j] != -1)) {
                    //Save chosen connection
                    //What format??? what is input and what output (i or j)???  ---------- first is input then output
                    this.nodes[allIds[i]].chosenConnections.push([allIds[i], allIds[j]]);
                }
            }
        } 
    }

    rerollLetters() {
        //Exclude Node id -1
        let allIds = Object.keys(this.nodes);
        //console.log(Object.keys(this.nodes));

        //Go through each node
        //For each node take all letter1 and letter2 chances each together
        //Then from that decide the letter to pick for each and set it
        for(let i = 0; i < allIds.length; i++) {
            //Or make an array with all possible stuff and the number determoins the number of that in the array and then chose one value in the array
            if((allIds[i] != -1) || (allIds[i] != -2)) {
                this.nodes[allIds[i]].chosenLetter1 = this.weightedRandomSelect(this.nodes[allIds[i]].letterChances1);
                this.nodes[allIds[i]].chosenLetter2 = this.weightedRandomSelect(this.nodes[allIds[i]].letterChances2);
            }
        }
    }


    weightedRandomSelect(letterChances) {
        const expanded = [];
        
        for (let letter in letterChances) {
            for (let count = 0; count < letterChances[letter]; count++) {
                expanded.push(letter);
            }
        }
        
        return expanded[Math.floor(Math.random() * expanded.length)];
    }


    updateAges() {
        let allIds = Object.keys(this.nodes);
        //console.log(Object.keys(this.nodes));

        for(let i = 0; i < allIds.length; i++) {
            this.nodes[allIds[i]].age += 1;
        }
    }


    startingPopulation(numNodes) {
        for (let i = 0; i < numNodes; i++) {
            this.addNode(i);
        }
    }






    tests() {
        let allIds = Object.keys(this.nodes);
        //console.log(Object.keys(this.nodes));


        // for(let i = 0; i < allIds.length; i++) {
        //     console.log(this.nodes[allIds[i]]);
        // }

        // console.log(this.score.currentStreak);
        // console.log(this.score.score);

        // for(let i = 0; i < allIds.length; i++) {
        //     console.log("id: " + allIds[i]);
        //     console.log(this.nodes[allIds[i]].letterChances1);
        // }

        //console.log(this.connectionChances);
        console.log(JSON.stringify(flow.connectionChances))

        // for(let i = 0; i < allIds.length; i++) {
        //     for(let j = 0; j < allIds.length; j++) {
        //         console.log("hi: " + this.getChance(allIds[i], allIds[j]));
        //     }
        // }
    }
}