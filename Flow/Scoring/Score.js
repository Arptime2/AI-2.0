class Score {
    constructor() {
        this.score = 0;

        this.currentStreak = 0;
        this.multiplier = 1;

        this.correctNothingScore = 0.1;
        this.incorrectNothingScore = -0.1;
        this.correctScore = 7;
        this.incorrectScore = -10;
    }


    setCorrectScore() {
        this.currentStreak += this.multiplier;

        this.score = 1 * this.correctScore;

        console.log("c");
    }

    setIncorrectScore() {
        this.currentStreak = 0;

        this.score = this.incorrectScore;

        console.log("i");
    }

    setCorrectNothingScore() {
        this.score = this.correctNothingScore;

        console.log("cn");
    }

    setIncorrectNothingScore() {
        this.score = this.incorrectNothingScore;

        console.log("in");
    }
}