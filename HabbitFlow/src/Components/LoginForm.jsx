import { useNavigate } from 'react-router-dom'

import useFormAuth from '../Hooks/useFormAuth' // Import the Custom Hook

const LoginForm = () => {
    const navigate = useNavigate();
 
    const {
        username,
        email,
        password,
        icon,
        passwordType,

        usernameError,
        emailError,
        passwordError,
        submitMessage,
        
        changeImage,
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
                    <input type="text" 
                           name="username" 
                           value={username} 
                           className='registerInput' 
                           id="username" 
                           placeholder='Username' 
                           onChange={handleUsernameChange}
                    />
                    <p className="userNameMessage">{usernameError}</p>
                </div>
                
                <div className="emailContainer">
                    <input type="text" 
                           name="email" 
                           value={email} 
                           className='registerInput' 
                           id="email" 
                           placeholder='Email' 
                           onChange={handleEmailChange}
                    />
                    <p className="emailMessage">{emailError}</p>
                </div>

                <div className="passwordContainer">
                    <input type={passwordType} 
                           name="password" 
                           value={password} 
                           className='registerInput' 
                           id="password" 
                           placeholder='Password' 
                           onChange={handlePasswordChange}
                    />
                    <img className='registerIcon viewIcon' src={icon} alt="eyeView Icon" onClick={changeImage} data-id="1"/>
                    <p className="passwordMessage">{passwordError}</p>
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
