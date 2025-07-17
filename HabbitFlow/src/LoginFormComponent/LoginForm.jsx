import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className='goHomeBtn' onClick={() => navigate('/')}>Go Back to Homepage</button>
        
            <div className='loginDiv'>
                
            </div>
        </>
    )
}

export default LoginForm
