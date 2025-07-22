import { useLocation } from 'react-router-dom';
import { useEffect, useState} from 'react';

import NavHabbits from '../Components/NavHabbits.jsx';
import AddHabbitInput from '../Components/AddHabbitInput.jsx';
import Habbit from '../Components/Habbit.jsx';

import noResults from '../assets/no-results.png'
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
        const newHabitItem = {
            id: Date.now(),
            text: newHabit,
            isComplete: false
        }

        const updatedHabbits = [...userHabbits, newHabitItem];
        console.log(updatedHabbits)

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

    // Toggle Completed Task
    const toggleCompleted = (id) => {
        setUserHabbits((prevUserHabbits) => {
            const updatedHabbits = prevUserHabbits.map((habbitItem) => {
                if (habbitItem.id === id) {
                    return { ...habbitItem, isComplete: !habbitItem.isComplete };
                }
                return habbitItem;
            });

            // Save to localStorage
            const allHabbits = JSON.parse(localStorage.getItem("userHabits")) || {};
            allHabbits[username] = updatedHabbits;
            localStorage.setItem("userHabits", JSON.stringify(allHabbits));

            return updatedHabbits; // Return updated state
        });
    };

    // Count the Completed Tasks
    const countCompletedTasks = () => {
        const allHabbits = JSON.parse(localStorage.getItem("userHabits")) || {};
        const userHabbits = allHabbits[username];
        let count = 0;

        userHabbits.map((habbitItem) => {
            if(habbitItem.isComplete){
                count ++;
            }
        })
        console.log(count)
        return count
    }

    // Show the UserHabbits
    const showUserHabbits = () => {
        let isEmpty = false;

        const allHabbits = JSON.parse(localStorage.getItem("userHabits")) || {};
        const userHabbits = allHabbits[username];

        if (!userHabbits || userHabbits.length === 0){
            isEmpty = true
        }

        if(isEmpty){
            return <div className='noResultsContainer'>
                        <img src={noResults} alt='no Habbits Icon' className='noResult'/>
                        <h2 className="noResultsMessage">No Habbits</h2>
                   </div>
        }
        else{
            return userHabbits.map((habbit, index) => (
                    <Habbit
                        key={index}
                        id={habbit.id} 
                        habbitText={habbit.text} 
                        onDelete={() => handleDeleteHabbit(index)}
                        isComplete = {habbit.isComplete}
                        toggleCompleted={toggleCompleted}
                    />
            ))
        }
    }

    // All Completed Tasks
    const allCompleted = () => {
        const totalCount = countCompletedTasks()
        if(totalCount === userHabbits.length && userHabbits.length!=0){
            return <h2 className='habbitCounter'>Good job, all Habbits Completed!</h2>
        }
        else{
            return <h2 className='habbitCounter'>Keep Going: {countCompletedTasks()} / {userHabbits.length}</h2>
        }
    }

    return (
        <>
            <NavHabbits username={username} />

            <div className="habbitWrapper">
                <AddHabbitInput onAdd={handleAddHabbit} />
            </div>

            {allCompleted()}

            <div className="habbitsBox">
                {showUserHabbits()}
            </div>
        </>
    );
};

export default Habbits;
