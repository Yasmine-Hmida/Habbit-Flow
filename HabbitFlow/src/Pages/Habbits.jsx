import NavHabbits from '../Components/NavHabbits.jsx'
import { useLocation } from 'react-router-dom'

const Habbits = () => {

    // Get the Username of the current user
    const Location = useLocation();
    const username = Location.state?.username || 'Guest';

    return (
      <>
          <NavHabbits username={username}/>
      </>
    )
}

export default Habbits
