class Score {
    constructor() {
        this.score = 0;

        this.currentStreak = 0;
        this.multiplier = 1;

        this.correctNothingScore = 0.1;
        this.incorrectNothingScore = -0.1;
        this.correctScore = 1;
        this.incorrectScore = -1;
    }


    setCorrectScore() {
        this.currentStreak += this.multiplier;

        this.score = this.currentStreak * this.correctScore;

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