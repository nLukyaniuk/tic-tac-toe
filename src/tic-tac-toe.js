class TicTacToe {
    constructor() {
        this.x = 'x';
        this.o = 'o';
        this.currentPlayer = this.x;
        this.matrix = new Array(3).fill(null);
        this.matrix = this.matrix.map(x => new Array(3).fill(null));
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === this.x ? this.o : this.x;
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw();
    }

    getWinner() {
        var winner = null;

        for (var i = 0; i < 3; i++) {
            if(this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][0] === this.matrix[i][2]) {
                winner = this.matrix[i][0]; 
            }
        }

        for (var i = 0; i < 3; i++) {
            if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[0][i] === this.matrix[2][i]) {
                winner = this.matrix[0][i];
            }
        }

        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
            winner = this.matrix[0][0];
        }

        if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) {
            winner = this.matrix[0][2];
        }

        return winner;
    }

    noMoreTurns() {
        var arr = this.matrix.reduce(function(prev, curr){
            return prev.concat(curr);
        }, []);
        return arr.every(elem => elem);
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
