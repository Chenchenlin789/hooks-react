import React, { useState } from 'react';

const Counting = () => {

    const [counting, setCounting] = useState(10)
    const increment = () => {
        setCounting(counting + 1)
    }

    return (
        <div>
            <h1>Lev 1_1: Counter</h1>
            <div>
                <button onClick={increment}>increment </button>
                {counting}
                <button onClick={() => setCounting(counting - 1)}>decrement </button>
            </div>
            <button onClick={() => setCounting(0)}>RESET</button>
        </div >
    );
}

export default Counting;



