import { useEffect, useState } from "react";

import { WinnerModal } from "./Components/WinnerModal";
import { Square } from "./Components/Square";
import { checkWinner } from "./Logic/board";
import { TURNS } from "./Constants";

export function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.X);
    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {
        if (board[index] || winner) return;

        setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
        setBoard([...board.slice(0, index), turn, ...board.slice(index + 1)]);
    };

    useEffect(() => {
        setWinner(checkWinner(board));
    }, [board]);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
    };

    return (
        <main className="board">
            <h1>Tic Tac Toe</h1>
            <button onClick={() => resetGame()}>Reset Game</button>

            <section className="game">
                {board.map((_, index) => (
                    <Square key={index} index={index} updateBoard={updateBoard}>
                        {board[index]}
                    </Square>
                ))}
            </section>

            <section className="turn">
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>

            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    );
}
