import React, { useState } from 'react';

const Counting = () => {

    const [counting, setCounting] = useState(10)
    const increment = () => {
        setCounting(counting + 1)
    }

    return (
        <div>

            <button onClick={increment}>increment </button>
            {counting}
            <button onClick={() => setCounting(counting - 1)}>decrement </button>

        </div>
    );
}

export default Counting;



