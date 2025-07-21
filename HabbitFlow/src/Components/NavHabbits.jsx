import { useNavigate } from "react-router-dom"
import './NavHabbits.css'

const NavHabbits = ({username}) => {

    const navigate = useNavigate();

    return (
        <div className='navHabbits'>
            <h1 className="welcomeHabbits">Welcome {username}. <br/> <strong>P.S: </strong>Adham is in love with his ex-wife</h1>
            <button className="goHomeBtn logOutBtn" onClick={() => navigate('/' , {replace:true})}>Log Out</button>
        </div>
    )
}

export default NavHabbits
