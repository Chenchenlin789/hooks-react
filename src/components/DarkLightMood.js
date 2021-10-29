import React, { useState } from 'react';

const IsDark = () => {

    const [isDark, setIsDark] = useState(true);
    const handleToggle = () => {
        setIsDark(!isDark)
    }

    return (
        <div style={isDark ? { background: 'lightblue', height: '30vh', color: '#333' } :
            { background: 'darkblue', height: '30vh', color: '#fff' }}>
            {isDark ? "DAY TIME" : "NIGHT TIME"}
            <button onClick={handleToggle}> {isDark ? "To Dark" : "To Night"} </button>
        </div>
    );
}

export default IsDark;