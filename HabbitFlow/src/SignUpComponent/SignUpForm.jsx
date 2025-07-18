import { useNavigate } from 'react-router-dom'

import useFormAuth from '../Hooks/useFormAuth' // Import the Custom Hook

const SignUpForm = () => {
    const navigate = useNavigate();

    const {
        username,
        email,
        password,
        password2,
        icon,
        icon2,
        passwordType,
        passwordType2,
        submitMessage,

        usernameError,
        emailError,
        passwordError,
        password2Error,

        changeImage,
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
                    <input type={passwordType} name="password" value={password} className='registerInput' id="password" placeholder='Password' onChange={handlePasswordChange}/>
                    <img className='registerIcon viewIcon' src={icon} alt="eyeView Icon" onClick={changeImage} data-id="1"/>
                    <p className="passwordMessage">{passwordError}</p>
                </div>

                <div className="passwordContainer">
                    <input type={passwordType2} name="password2" value={password2} className='registerInput' id="password2" placeholder='Re-Password' onChange={handlePassword2Change}/>
                    <img className='registerIcon viewIcon' src={icon2} alt="eyeView Icon" onClick={changeImage} data-id="2"/>
                    <p className="rePasswordMessage">{password2Error}</p>
                </div>

                <button type="submit" className='submitBtn'>Sign Up</button> 
                <p className="submitMessage">{submitMessage}</p>

                <div className="goSignUpPage">
                    <h2 className='goMessage'>Already have an account?</h2>
                    <button className="goRegister" onClick={() => navigate('/Login')}>Login</button>
                </div>
            </form>
        </>
    )
}

export default SignUpForm
