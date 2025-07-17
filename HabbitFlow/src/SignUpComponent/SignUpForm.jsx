import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className='goHomeBtn' onClick={() => navigate('/')}>Go Back to Homepage</button>
        
            <div className='signUpDiv'>
                
            </div>
        </>
    )
}

export default SignUpForm
