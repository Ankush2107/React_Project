import { useState } from "react"; 
import Card from "../Card/Card";
import './Grid.css'
import IsWinner from "../helpers/IsWinner";

function Grid({ numberOfCards}) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(false);
    const [winner, setWinner] = useState(null);

    function play(index) {
        if(turn == true) 
            board[index] = 'O';
        else
            board[index] = 'X';

        const win = IsWinner(board, turn ? 'O' : 'X');

        if(win) 
            setWinner(win);

        setBoard([...board]);
        setTurn(!turn)       
    }

    return (
        <div className="grid-wrapper">

            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                        <button className="reset">Reset Game</button>
                    </>
                )
            }


            <h1 className="turn-highlight">Current turn: {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((ele, idx) => <Card key={idx} onPlay={play} player={el} index={idx} />)}
            </div>
        </div>
    )
}

export default Grid;