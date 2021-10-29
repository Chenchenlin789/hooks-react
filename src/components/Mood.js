import React, { useState } from 'react';
import { Cat } from 'react-kawaii';
import { Ghost } from 'react-kawaii';

const Mood = () => {

    const [mood, setMood] = useState(true);
    const handleMood = () => {
        setMood(!true)
    }
    const catface = () => <Cat size={200} mood={mood ? "blissful" : "sad"} color="#FDA7DC" />;
    return (
        <div>
            <div>
                <button onClick={handleMood}> {mood ? "sad" : "happy"}</button>
            </div>
        </div >
    );
}

export default Mood;