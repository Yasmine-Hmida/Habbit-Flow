import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavHabbits from '../Components/NavHabbits.jsx';
import AddHabbitInput from '../Components/AddHabbitInput.jsx';
import Habbit from '../Components/Habbit.jsx';

import noResults from '../assets/no-results.png';
import './Habbits.css';

const Habbits = () => {
    
    // Get the user's name from the useNavigate
    const location = useLocation();
    const username = location.state?.username || 'Guest';

    const [userHabbits, setUserHabbits] = useState([]);

    // Load habits on first render or when username changes
    useEffect(() => {
        const allHabbits = JSON.parse(localStorage.getItem("userHabits")) || {};
        const currentUserHabbits = allHabbits[username] || [];
        setUserHabbits(currentUserHabbits);
    }, [username]);

    // Save habits to localStorage whenever userHabbits changes
    useEffect(() => {
        const allHabbits = JSON.parse(localStorage.getItem("userHabits")) || {};
        allHabbits[username] = userHabbits;
        localStorage.setItem("userHabits", JSON.stringify(allHabbits));
    }, [userHabbits, username]);

    // Add a habit
    const handleAddHabbit = (newHabit) => {
        const newHabitItem = {
            id: Date.now(),
            text: newHabit,
            isComplete: false
        };
        setUserHabbits([...userHabbits, newHabitItem]);
    };

    // Delete a habbit
    const handleDeleteHabbit = (indexToDelete) => {
        const updatedHabbits = [...userHabbits];
        updatedHabbits.splice(indexToDelete, 1);
        setUserHabbits(updatedHabbits);
    };

    // Toggle the completed Habbits
    const toggleCompleted = (id) => {
        const updatedHabbits = userHabbits.map(habit =>
            habit.id === id ? { ...habit, isComplete: !habit.isComplete } : habit
        );
        setUserHabbits(updatedHabbits);
    };

    // Count the Completed Tasks
    const countCompletedTasks = () => {
        return userHabbits.filter(habit => habit.isComplete).length;
    };

    // Display the number of completed tasks
    const allCompleted = () => {
        const totalCompleted = countCompletedTasks();
        
        if (userHabbits.length > 0 && totalCompleted === userHabbits.length) {
            return <h2 className='habbitCounter'>Good job, all Habbits Completed!</h2>;
        }
        return (
            <h2 className='habbitCounter'>
                Keep Going: {totalCompleted} / {userHabbits.length}
            </h2>
        );
    };

    // Display the List of habbits
    const showUserHabbits = () => {
        if (userHabbits.length === 0) {
            return (
                <div className='noResultsContainer'>
                    <img src={noResults} alt='no Habbits Icon' className='noResult' />
                    <h2 className="noResultsMessage">No Habbits</h2>
                </div>
            );
        }

        return userHabbits.map((habbit, index) => (
            <Habbit
                key={habbit.id}
                id={habbit.id}
                habbitText={habbit.text}
                onDelete={() => handleDeleteHabbit(index)}
                isComplete={habbit.isComplete}
                toggleCompleted={toggleCompleted}
            />
        ));
    };

    return (
        <>
            <NavHabbits username={username} />

            <div className="habbitWrapper">
                <AddHabbitInput onAdd={handleAddHabbit} />
            </div>

            {allCompleted()}

            <div className="habbitsBox">{showUserHabbits()}</div>
        </>
    );
};

export default Habbits;
