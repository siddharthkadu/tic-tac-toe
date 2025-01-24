import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const [isXTurn, setIsXTurn] = useState(true);
    const [state, setState] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null); // To store the winner

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        console.log(`Current State: ${state}`); // Debugging log
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]; // Return 'X' or 'O'
            }
        }
        return null; // No winner yet
    };

    const handleReset = () => {
        setState(Array(9).fill(null));  // Reset the board
        setWinner(null);                // Reset the winner
        setIsXTurn(true);               // Reset the turn to 'X'
    };

    const handleClick = (index) => {
        if (state[index] || winner) return;

        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";

        setState(copyState);

        const gameWinner = checkWinner();
        console.log(`Game Winner: ${gameWinner}`); // Debugging log
        if (gameWinner) {
            setWinner(gameWinner); 
            return; 
        }

        setIsXTurn(!isXTurn);
    };

    return (
        <div className='board-container'>
            {winner ? <h2>Winner: {winner}</h2> : <h2>Next Player: {isXTurn ? 'X' : 'O'}</h2>}
            <button onClick={handleReset}>Play Again</button>
            <div className='row-container'>
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]} />
                <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className='row-container'>
                <Square onClick={() => handleClick(3)} value={state[3]} />
                <Square onClick={() => handleClick(4)} value={state[4]} />
                <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className='row-container'>
                <Square onClick={() => handleClick(6)} value={state[6]} />
                <Square onClick={() => handleClick(7)} value={state[7]} />
                <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
        </div>
    );
}

export default Board;
