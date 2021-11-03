import React, { useState } from 'react';
import { Cat } from 'react-kawaii';
import { Ghost } from 'react-kawaii';

const Mood = () => {

    const [mood, setMood] = useState(true);
    const handleMood = () => {
        setMood(!true)
    }
    const catface = () => <Ghost size={200} mood={mood ? "blissful" : "sad"} color="#FDA7DC" />;
    return (
        <div>
            <div>
                <button onClick={handleMood}> {mood ? "sad" : "happy"}</button>
            </div>
        </div >
    );
}


// import { Cat } from 'react-kawaii';
// import { Ghost } from 'react-kawaii'
// import {usestate} from 'react'

// const Mood = () => {
//     const[isLucky,setMood]=usestate(true);

//     const toggleMood =()=>{
//         setMood(!isLucky)
//     }
//     const[isMood,randomMood]=usestate(["sad", "shocked", "happy", "blissful", "lovestruck", "excited", "ko"]);

//     const getRandomMood=()=>{
//         let random =Math.floor(Math.random() * 8);
//         randomMood(isMood[random])

//     }
//     return ( 
//     <div>
//         <div>
//             <Cat size={200} mood={isLucky?"blissful":"sad"} color="#FDA7DC" />;
//             <button onClick={toggleMood}>
//                 Change Mood
//             </button>
//         </div>
//         <div>
//         <Ghost size={200} mood={isMood} color="#FDA7DC" />;
//         <button onClick={getRandomMood}>
//             Random Mood
//         </button>
//         </div>
//     </div>
//      );
// }

// export default Mood;

export default Mood;