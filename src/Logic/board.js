import { WINNER_COMBOS } from "../Constants";

const checkEndGame = (board) => {
    return board.every((cell) => cell !== null) ? false : null;
};

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;

        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }

    return checkEndGame(boardToCheck);
};
