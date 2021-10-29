import React, { useState } from 'react';

const Collaps = () => {

    const [isOpen, setCollaps] = useState(false);
    const handleIsOpen = () => {
        setCollaps(!isOpen)
    }

    return (
        <div>
            <div>
                <h2>Why is React great?</h2>
                <button onClick={handleIsOpen}>
                    Handle open
                </button>
            </div>

            <div style={isOpen ? { display: "block", color: "grey" } : { display: "none", color: "grey" }}>
                <h2>Fast learning curve</h2>
            </div>
            {/* <div className={
                this.state.isOpen ?
                    "show" :
                    "hide"
            }> */}

        </div>
    );
}

export default Collaps;