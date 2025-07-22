import {useNavigate } from 'react-router-dom'

import notFoundIcon from '../assets/NotFound.png'
import './NotFound.css'
import '../Pages/Register.css' // To get the Design of the HomepageGo Button

const NotFound = () => {
    const navigate = useNavigate();
    
    return (
        <div className='notFoundContainer'>
            <img className="notFoundIcon" src={notFoundIcon} alt="Not Found Icon"/>
            <h2 className='notFoundDesc'>404 | Page Not Found!</h2>
            <button className="goHomeBtn" onClick={() => navigate('/' , {replace:true})}>Go Back to Homepage</button>
        </div>
    )
}

export default NotFound
 