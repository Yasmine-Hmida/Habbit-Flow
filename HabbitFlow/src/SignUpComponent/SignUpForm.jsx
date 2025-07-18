import { useNavigate } from 'react-router-dom'

import view from '../assets/view.png'
// import hide from '../assets/hide.png'

import useFormAuth from '../Hooks/useFormAuth' // Import the Custom Hook

const SignUpForm = () => {
    const navigate = useNavigate();

    const {
        username,
        email,
        password,
        password2,

        usernameError,
        emailError,
        passwordError,
        password2Error,

        handleUsernameChange,
        handleEmailChange,
        handlePasswordChange,
        handlePassword2Change,
        handleSignUpSubmit,
             
    } = useFormAuth()
    return (
        <>
            <button className='goHomeBtn' onClick={() => navigate('/')}>Go Back to Homepage</button>
            <form className='registerForm' onSubmit={handleSignUpSubmit}>
                <h1 className="registerTitle">Sign Up</h1>

                <div className="usernameContainer">
                    <input type="text" name="username" value={username} className='registerInput' id="username" placeholder='Username' onChange={handleUsernameChange}/>
                    <p className="userNameMessage">{usernameError}</p>
                </div>
                
                <div className="emailContainer">
                    <input type="text" name="email" value={email} className='registerInput' id="email" placeholder='Email' onChange={handleEmailChange}/>
                    <p className="emailMessage">{emailError}</p>
                </div>

                <div className="passwordContainer">
                    <input type="password" name="password" value={password} className='registerInput' id="password" placeholder='Password' onChange={handlePasswordChange}/>
                    <img className='registerIcon viewIcon' src={view} alt="eyeView Icon"/>
                    <p className="passwordMessage">{passwordError}</p>
                </div>

                <div className="passwordContainer">
                    <input type="password" name="password2" value={password2} className='registerInput' id="password2" placeholder='Re-Password' onChange={handlePassword2Change}/>
                    <img className='registerIcon viewIcon' src={view} alt="eyeView Icon"/>
                    <p className="rePasswordMessage">{password2Error}</p>
                </div>

                <button type="submit" className='submitBtn'>Sign Up</button> 

                <div className="goSignUpPage">
                    <h2 className='goMessage'>Already have an account?</h2>
                    <button className="goRegister" onClick={() => navigate('/Login')}>Login</button>
                </div>
            </form>
        </>
    )
}

export default SignUpForm
