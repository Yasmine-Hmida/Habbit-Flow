import './Nav.css';
import barsLogo from '../assets/bars.png'
import closeLogo from '../assets/close.png'

import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Nav = () => {
    const navRef = useRef(); // Refers to the Nav Tag like a "pointer" to the element without rendering

    const showNavTag = () => {
        navRef.current.classList.toggle("responsiveNav");
    }
 
    return (
        <>
            {/* This will appear in the Responsive Part */}
            <header>
                <Link to='/' className='logo navLink' id='logoResponsive'>Habbit Flow</Link>
                <img className='navIcons barsIcon' src={barsLogo} alt="Bars Icon" onClick={showNavTag}/>
            </header>

            {/* This is the Desktop Version */}
            <nav className="navBar" ref={navRef}>
                <Link to='/' className='logo navLink' id='logoNormal'>Habbit Flow</Link>

                <div className="buttons">
                    <Link to='/Login' className='login navLink'>Login</Link>
                    <Link to='/SignUp' className='signUp navLink'>Sign Up</Link>
                    <img className='navIcons closeIcon' src={closeLogo} alt="Close Icon" onClick={showNavTag}/>
                </div>
            </nav>
        </>  
    )
}

export default Nav
