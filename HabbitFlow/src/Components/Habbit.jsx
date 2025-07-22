import './Habbit.css'

import bin from '../assets/bin.png'
import tick from '../assets/tick.png'
import notTick from '../assets/not-tick.png'

import { useState } from 'react';

const Habbit = ({ habbitText, onDelete , id, isComplete , toggleCompleted}) => {
    const [selected, setSelected] = useState(isComplete); 

    const handleClick = () => {
        setSelected((prev) => !prev);
        toggleCompleted(id); // Update the global state and localStorage
    };

    return (
        <div className={`HabbitContainer ${selected ? 'selected' : ''}`}  onClick={handleClick}>

            <div className="habbit">
                <img className='checkDoneIcon' src={isComplete? tick:notTick} alt="Done Icon"/>
                <h1 className="habbitMessage">{habbitText}</h1>
            </div>

            <img 
                src={bin} 
                alt="Bin Icon" 
                className='habbitDel' 
                onClick={(e) => {
                    e.stopPropagation(); 
                    onDelete();
                }}
            />

        </div>
    )
}

export default Habbit
