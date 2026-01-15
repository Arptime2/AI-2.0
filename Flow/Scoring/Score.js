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

        this.score = this.multiplier * this.correctScore;
    }

    setIncorrectScore() {
        this.currentStreak = 0;

        this.score = this.incorrectScore;
    }

    setCorrectNothingScore() {
        this.currentStreak = 0;

        this.score = this.correctNothingScore;
    }

    setIncorrectNothingScore() {
        this.currentStreak = 0;

        this.score = this.incorrectNothingScore;
    }
}