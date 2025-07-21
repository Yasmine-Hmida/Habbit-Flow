import NavHabbits from '../Components/NavHabbits.jsx'
import { useLocation } from 'react-router-dom'

import './Habbits.css'

import AddHabbitInput from '../Components/AddHabbitInput.jsx';
import Habbit from '../Components/Habbit.jsx'

const Habbits = () => {
    // Get the Username of the current user
    const Location = useLocation();
    const username = Location.state?.username || 'Guest';

    return (
      <>
        <NavHabbits username={username}/>

        <div className="habbitWrapper">
            <AddHabbitInput username={username}/>
        </div>

        <div className="habbitsBox">
            <Habbit/>
            <Habbit/>
        </div>
      </>
    )
}

export default Habbits
