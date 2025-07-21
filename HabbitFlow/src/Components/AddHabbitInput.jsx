import { useState } from "react";

const AddHabbitInput = ({username}) => {

    // Get the List of Habbits
    const allHabits = JSON.parse(localStorage.getItem("userHabits")) || {};

    // Manage the Habbit Input State
    const [habbit , setHabbit] = useState('')
    const handleHabbitChange = (e) => {
        setHabbit(e.target.value)
    }
    
    // Add Habbit to the localStorage
    const addHabbit = () => {
        if(!(habbit == '')){
            allHabits[username] = [...allHabits[username] , habbit];       // Add the new Habbit to the User's list of habbits
            localStorage.setItem("userHabits", JSON.stringify(allHabits)); // Update the Local Storage
            setHabbit('')
        }
    }

    return (
        <div className="habbitContainer">
            <div className="addHabbitContainer">
                <h1 className="addHabbitTitle">Add new Habbit</h1>

                <div className="addHabbitInput">
                    <input type="text" placeholder='E.g: Drink 8 glasses of water' name='habbit' value={habbit} onChange={handleHabbitChange}/>
                    <button type="submit" className='addHabbitBtn goHomeBtn' onClick={addHabbit}>Add Habbit</button>
                </div>
            </div>
        </div>
    )
}

export default AddHabbitInput
