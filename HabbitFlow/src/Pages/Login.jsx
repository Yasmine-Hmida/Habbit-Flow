import { useNavigate } from 'react-router-dom'
import Nav from '../NavComponent/Nav.jsx'

const Login = () => {

    const navigate = useNavigate(); /* navigate will take us to another path */

    return (
      <div>
        <Nav/>
        <h1>Login Page</h1>
        <button onClick={() => navigate('/Habbits' , {replace:true})}>Go back Home</button>
        {/* You don’t want users to go back to the login page after they’re logged in. */}
      </div>
    )
}

export default Login
