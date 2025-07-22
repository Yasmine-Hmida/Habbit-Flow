import { useLocation } from 'react-router-dom';
import { useEffect, useState} from 'react';

import NavHabbits from '../Components/NavHabbits.jsx';
import AddHabbitInput from '../Components/AddHabbitInput.jsx';
import Habbit from '../Components/Habbit.jsx';

import './Habbits.css';

const Habbits = () => {

    // Get the Username from the useNavigate in the Login
    const location = useLocation();
    const username = location.state?.username || 'Guest';

    // Use State of the user's habbits
    const [userHabbits, setUserHabbits] = useState([]);

    // Load habits on the username mount and only re-render when the username changes
    useEffect(() => {
        const allHabbits = JSON.parse(localStorage.getItem("userHabits")) || {};
        setUserHabbits(allHabbits[username] || []);
    }, [username]);

    // Add a new Habbit
    const handleAddHabbit = (newHabit) => {
        const updatedHabbits = [...userHabbits, newHabit];

        // Save in state
        setUserHabbits(updatedHabbits);

        // Save to localStorage
        const allHabbits = JSON.parse(localStorage.getItem("userHabits")) || {};
        allHabbits[username] = updatedHabbits;
        localStorage.setItem("userHabits", JSON.stringify(allHabbits));
    };

    // Delete a habbit
    const handleDeleteHabbit = (indexToDelete) => {
        const updatedHabbits = [...userHabbits];
        updatedHabbits.splice(indexToDelete, 1); // remove habit

        setUserHabbits(updatedHabbits); // update state

        // update localStorage
        const allHabbits = JSON.parse(localStorage.getItem("userHabits")) || {};
        allHabbits[username] = updatedHabbits;
        localStorage.setItem("userHabits", JSON.stringify(allHabbits));
    };


    
    return (
        <>
            <NavHabbits username={username} />

            <div className="habbitWrapper">
                <AddHabbitInput onAdd={handleAddHabbit} />
            </div>

            <h2 className='habbitCounter'>Keep Going: 0 / {userHabbits.length}</h2>

            <div className="habbitsBox">
                {userHabbits.map((habbit, index) => (
                    <Habbit
                        key={index} 
                        habbitText={habbit} 
                        onDelete={() => handleDeleteHabbit(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default Habbits;
