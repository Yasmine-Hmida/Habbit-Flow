import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useFormAuth = () => {
    const navigate = useNavigate(); /* For Redirections */

    // Regular expressions for validation
    const regexEmail = /.+@.+\..+/;
    const regexPassword = /.{6}/;

    // Input fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    // Error messages
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password2Error, setPassword2Error] = useState('');
    const [submitMessage , setSubmitMessage] = useState('');

    // Validation functions
    const validateUsername = () => /.+/.test(username);
    const validateEmail = () => regexEmail.test(email);
    const validatePassword = () => regexPassword.test(password);
    const validatePassword2 = () => password === password2;

    // Change handlers
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handlePassword2Change = (e) => setPassword2(e.target.value);

    // Submit handler SignUp
    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setPassword2Error('');

        // Validate inputs
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isPassword2Valid = validatePassword2();

        // Set errors
        if (!isUsernameValid) setUsernameError('Empty Username Field');
        if (!isEmailValid) setEmailError('Invalid Email');
        if (!isPasswordValid) setPasswordError('Password must be at least 6 characters');
        if (!isPassword2Valid) setPassword2Error('Passwords do not match');

        const formIsValid = isUsernameValid && isEmailValid && isPasswordValid && isPassword2Valid;

        if (formIsValid) {
            const existingUsers = JSON.parse(localStorage.getItem("users")) || []
            const newUser = {
                username: username,
                email:email,
                password: password
            }

            const alreadyExists = existingUsers.some(
                user => user.username === username && user.email === email
            );

            if (alreadyExists) {
                setSubmitMessage("User already exists!");
                return;
            }

            existingUsers.push(newUser)
            localStorage.setItem("users", JSON.stringify(existingUsers));

            navigate('/', { replace: true });
        }
    };

    // Submit handler Login
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem("users")) || []
        let currentUser = {username: username , email: email , password : password}
        var isExistant = false;

        for(let user of users){
            if(user.username === currentUser.username && user.email === currentUser.email && user.password === currentUser.password){
                isExistant = true;
                navigate('/Habbits', { replace: true });
                return;
            }
        }

        if(!isExistant){
            setSubmitMessage("Inexistant User!")
        }
    };

    return {
        // Values
        username,
        email,
        password,
        password2,

        // Errors
        usernameError,
        emailError,
        passwordError,
        password2Error,
        submitMessage,

        // Handlers
        handleUsernameChange,
        handleEmailChange,
        handlePasswordChange,
        handlePassword2Change,
        handleSignUpSubmit,
        handleLoginSubmit
    };
};

export default useFormAuth;
