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
        console.log(this.nodes);
        console.log(this.connectionChances);
    }

    deleteNode(id) {
        delete this.connectionChances[id];
        delete this.nodes[id];
    }

    setChance(id1, id2, chance) {
        this.connectionChances[id1][id2] = chance;
    }

    getChance(id1, id2) {
        return this.connectionChances[id1][id2] || 50;
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
        console.log(Object.keys(this.nodes));

        //Loop through each node:
        //get selected stuff of each node and where it is
        //update all the stuff

        //Limit update values at 0% and 100%
        for(let i = 0; i < allIds.length;i++) {
            //Get all
            let letter1 = this.nodes[allIds[i]].chosenLetter1;
            let letter2 = this.nodes[allIds[i]].chosenLetter2;
            let connections = this.nodes[allIds[i]].chosenConnections;

            let nodeScore = this.score.score;

            //Update chances
            this.nodes[allIds[i]].letterChances1[letter1] += nodeScore;
            this.nodes[allIds[i]].letterChances2[letter2] += nodeScore;
            //console.log(connections);

            //DEPENDS ON HOW CHOSEN CONNECTIONS ARE STORED
            for(let j = 0; j < connections.length; j++)
            {
                //this.setChance();
            }
        }
    }

    updateINChances(){
        //limited with 70%max and 30min percent
    }


    manageNodes() {
        //Create new nodes
        //Delete Nodes

        //Rules:
        //(Maybe do with case statements)
        //Delete on 100%/0% for any chance in a node and a certain age that it has to reach

        //Create: To have a constant population that can be controlled???? -> please no more variables
        //Or 
    }

    rerollConnections() {
        //Exclude Node id -1
        //Go through all possible connections from dictionary (use double for loop with nodeids)
        //Decide if connect according to chances  (use getChance)
        //save the decision in chosenConnections  (use setChance)
        let allIds = Object.keys(this.nodes);
        console.log(Object.keys(this.nodes));


        //2D loop
        for(let i = 0; i < allIds.length;i++) {
            ///Do i also not have to set all connections chosen array to nothing again?????
            this.nodes[allIds[i]].chosenConnections = [];

            for(let j = 0; j < allIds.length;j++) {
                let currentChance = this.getChance(allIds[i], allIds[j]);

                //Decide with random
                if ((Math.random() * 100) < currentChance) {
                    //Save chosen connection
                    //What format??? what is input and what output (i or j)???
                    this.nodes[allIds[i]].chosenConnections
                }
            }
        } 
    }

    rerollLetters() {
        //Exclude Node id -1
    }


    updateAges() {
        let allIds = Object.keys(this.nodes);
        console.log(Object.keys(this.nodes));

        for(let i = 0; i < allIds.length;i++) {
            this.nodes[allIds[i]].age += 1;
        }
    }
}