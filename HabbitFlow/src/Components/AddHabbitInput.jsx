import { useState } from "react";

const AddHabbitInput = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            onAdd(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <div className="habbitContainer">
            <div className="addHabbitContainer">

                <h1 className="addHabbitTitle">Add new Habbit</h1>

                <div className="addHabbitInput">
                    <input
                        type="text"
                        placeholder="Enter a habit"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="addHabbitBtn goHomeBtn" onClick={handleAdd}>Add Habbit</button>
                </div>
                
            </div>
        </div>
    )
}

export default AddHabbitInput

