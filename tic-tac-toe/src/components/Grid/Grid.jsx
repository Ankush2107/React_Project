import { useState } from "react"; 
import Card from "../Card/Card";
import './Grid.css'

function Grid({ numberOfCards}) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(false);

    return (
        <div className="grid-wrapper">
            <h1 className="turn-highlight">Current turn: {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((ele, idx) => <Card key={idx} />)}
            </div>
        </div>
    )
}

export default Grid;