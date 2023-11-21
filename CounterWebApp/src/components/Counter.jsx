import { useState } from "react";
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counterApp">
            <h1>{count}</h1>
            <div className="btn">
                <button className="inc" onClick={() => setCount(count + 1)}>Increase</button>
                <button className="dec" onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
        </div>
    )
}
export default Counter;