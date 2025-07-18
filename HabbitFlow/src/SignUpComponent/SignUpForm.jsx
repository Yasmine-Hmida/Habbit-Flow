import { useNavigate } from 'react-router-dom'
import view from '../assets/view.png'
// import hide from '../assets/hide.png'

const SignUpForm = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className='goHomeBtn' onClick={() => navigate('/')}>Go Back to Homepage</button>
            <form className='registerForm'>
                <h1 className="registerTitle">Sign Up</h1>

                <div className="usernameContainer">
                    <input type="text" name="username" className='registerInput' id="username" placeholder='Username'/>
                    <p className="userNameMessage"></p>
                </div>
                
                <div className="emailContainer">
                    <input type="text" name="email" className='registerInput' id="email" placeholder='Email'/>
                    <p className="emailMessage"></p>
                </div>

                <div className="passwordContainer">
                    <input type="password" name="password" className='registerInput' id="password" placeholder='Password'/>
                    <img className='registerIcon viewIcon' src={view} alt="eyeView Icon"/>
                    <p className="passwordMessage"></p>
                </div>

                <div className="passwordContainer">
                    <input type="password" name="password2" className='registerInput' id="password2" placeholder='Re-Password'/>
                    <img className='registerIcon viewIcon' src={view} alt="eyeView Icon"/>
                    <p className="rePasswordMessage"></p>
                </div>

                <button type="submit" className='submitBtn'>Login</button> 
                <p className="submitMessage"></p>

                <div className="goSignUpPage">
                    <h2 className='goMessage'>Already have an account?</h2>
                    <button className="goRegister" onClick={() => navigate('/Login')}>Login</button>
                </div>
            </form>
        </>
    )
}

export default SignUpForm
