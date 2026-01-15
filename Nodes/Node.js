class Node {
    constructor(id) {
        this.id = id;

        this.value = '';

        this.letterChances1 = {
            A: 50, B: 50, C: 50, D: 50, E: 50, F: 50, G: 50,
            H: 50, I: 50, J: 50, K: 50, L: 50, M: 50, N: 50,
            O: 50, P: 50, Q: 50, R: 50, S: 50, T: 50, U: 50,
            V: 50, W: 50, X: 50, Y: 50, Z: 50
        };

        this.letterChances2 = {
            A: 50, B: 50, C: 50, D: 50, E: 50, F: 50, G: 50,
            H: 50, I: 50, J: 50, K: 50, L: 50, M: 50, N: 50,
            O: 50, P: 50, Q: 50, R: 50, S: 50, T: 50, U: 50,
            V: 50, W: 50, X: 50, Y: 50, Z: 50
        };


        this.chosenConnections = [];

        this.chosenLetter1 = '';
        this.chosenLetter2 = '';

        this.age = 0;
    }

    chooseConnections() {

    }

    chooseLetters() {

    }

    updateNode() {
        this.age += 1;

        this.chooseConnections();
        this.chooseLetters();
    }
}