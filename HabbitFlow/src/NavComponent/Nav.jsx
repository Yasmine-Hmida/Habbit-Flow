import './Nav.css';
import barsLogo from '../assets/bars.png'
import closeLogo from '../assets/close.png'

import { useRef } from 'react';

const Nav = () => {
    const navRef = useRef(); // Refers to the Nav Tag like a "pointer" to the element without rendering

    const showNavTag = () => {
        navRef.current.classList.toggle("responsiveNav");
    }

    return (
        <>
            <header> {/* This will appear in the Responsive Part */}
                <a href="#" className="logo" id="logoResponsive">Habbit Flow</a>
                <img className='navIcons barsIcon' src={barsLogo} alt="Bars Icon" onClick={showNavTag}/>
            </header>

            {/* This is the Desktop Version */}
            <nav className="navBar" ref={navRef}>
                <a href="#" className="logo" id="logoNormal">Habbit Flow</a>

                <div className="buttons">
                    <a href='#' className="login">Login</a>
                    <a href='#' className="signUp">Sign Up</a>

                    <img className='navIcons closeIcon' src={closeLogo} alt="Close Icon" onClick={showNavTag}/>
                </div>
            </nav>
        </>  
    )
}

export default Nav
