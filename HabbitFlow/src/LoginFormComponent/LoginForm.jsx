import { useNavigate } from 'react-router-dom'

import view from '../assets/view.png'
// import hide from '../assets/hide.png'

import useFormAuth from '../Hooks/useFormAuth' // Import the Custom Hook

const LoginForm = () => {
    const navigate = useNavigate();

    const {
        username,
        email,
        password,

        submitMessage,

        handleUsernameChange,
        handleEmailChange,
        handlePasswordChange,
        handleLoginSubmit   
             
    } = useFormAuth();

    return (
        <>
            <button className='goHomeBtn' onClick={() => navigate('/')}>Go Back to Homepage</button>
            <form className='registerForm' onSubmit={handleLoginSubmit}>
                <h1 className="registerTitle">Login</h1>

                <div className="usernameContainer">
                    <input type="text" name="username" value={username} className='registerInput' id="username" placeholder='Username' onChange={handleUsernameChange}/>
                </div>
                
                <div className="emailContainer">
                    <input type="text" name="email" value={email} className='registerInput' id="email" placeholder='Email' onChange={handleEmailChange}/>
                </div>

                <div className="passwordContainer">
                    <input type="password" name="password" value={password} className='registerInput' id="password" placeholder='Password' onChange={handlePasswordChange}/>
                    <img className='registerIcon viewIcon' src={view} alt="eyeView Icon"/>
                </div>

                <button type="submit" className='submitBtn'>Login</button> 
                <p className="submitMessage">{submitMessage}</p>

                <div className="goSignUpPage">
                    <h2 className='goMessage'>Don't have an account?</h2>
                    <button className="goRegister" onClick={() => navigate('/SignUp')}>Sign Up</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm
