class Node {
    constructor(id) {
        this.id = id;

        this.value = '';

        this.letterChances1 = {
            "1" : 50, "0" : 50
        };

        this.letterChances2 = {
            "1" : 50, "0" : 50
        };


        this.chosenConnections = [];

        this.chosenLetter1 = '';
        this.chosenLetter2 = '';

        this.age = 0;
    }
}