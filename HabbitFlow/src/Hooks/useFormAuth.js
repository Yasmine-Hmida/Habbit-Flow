import { useNavigate } from "react-router-dom";
import { useState } from "react";

import view from '../assets/view.png'
import hide from '../assets/hide.png'

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
    const validateNotMissingEmail = () => /.+/.test(email);
    const validateEmail = () => regexEmail.test(email);
    const validateNotMissingPassword = () => /.+/.test(password)
    const validatePassword = () => regexPassword.test(password);
    const validatePassword2 = () => password === password2;

    // Change handlers
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handlePassword2Change = (e) => setPassword2(e.target.value);

    // Eye Icons and Password Types
    const [icon , setIcon] = useState(view)
    const [passwordType , setPasswordType] = useState("password")
    const [icon2 , setIcon2] = useState(view)
    const [passwordType2 , setPasswordType2] = useState("password")

    // Toggle Icons and Password Types Function
    const changeImage = (e) => {
        const field = e.target.dataset.id;

        if (field === "1"){
            if(icon == view){
                setIcon(hide)
                setPasswordType("text")
            }
            else{
                setIcon(view)
                setPasswordType("password")
            }
        }
        else{
            if(icon2 == view){
                setIcon2(hide)
                setPasswordType2("text")
            }
            else{
                setIcon2(view)
                setPasswordType2("password")
            }
        }
    }

    // Validation Function for both Login and Sign Up Function
    const validateInputs = () => {
        // Reset errors
        setUsernameError('');
        setEmailError('');
        setPasswordError('');

        // Validate inputs
        const isUsernameValid = validateUsername();
        const isNotMissingEmail = validateNotMissingEmail();
        const isEmailValid = validateEmail();
        const isNotMissingPassword = validateNotMissingPassword();
        const isPasswordValid = validatePassword();
    
        // Set errors
        if (!isUsernameValid) setUsernameError('Username Missing!');

        if (!isNotMissingEmail) {
            setEmailError('Email Missing!');
        } else if (!isEmailValid) {
            setEmailError('Invalid Email!');
        }

        if(!isNotMissingPassword){
            setPasswordError("Password Missing!")
        }
        else if (!isPasswordValid) setPasswordError('Password must have 6 characters!');

        return isUsernameValid && isNotMissingEmail && isEmailValid && isNotMissingPassword && isPasswordValid;
    }

    // Submit handler SignUp
    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        const commonFieldsValid = validateInputs();

        // Reset errors
        setPassword2Error('');

        // Validate inputs
        const isPassword2Valid = validatePassword2();

        // Set errors
        if (!isPassword2Valid) setPassword2Error('Passwords do not match');

        const formIsValid = commonFieldsValid && isPassword2Valid;

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

            navigate('/Login', { replace: true });
        }
    };

    // Submit handler Login
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // Reset Errors
        setSubmitMessage('')  
        
        const nothingMissing = validateInputs();

        if(nothingMissing){
            let users = JSON.parse(localStorage.getItem("users")) || []
            let currentUser = {username: username , email: email , password : password}
            var isExistant = false;

            for(let user of users){
                if(user.username === currentUser.username && user.email === currentUser.email && user.password === currentUser.password){
                    isExistant = true;

                    navigate('/Habbits', {
                        replace: true,
                        state: { username: currentUser.username }
                    });
                    
                    return;
                }
            }

            if(!isExistant){
                setSubmitMessage("Inexistant User!")
            }
        }
    };

    return {
        // Values
        username,
        email,
        password,
        password2,
        icon,
        icon2,
        passwordType,
        passwordType2,

        // Errors
        usernameError,
        emailError,
        passwordError,
        password2Error,
        submitMessage,

        // Handlers
        changeImage,
        handleUsernameChange,
        handleEmailChange,
        handlePasswordChange,
        handlePassword2Change,
        handleSignUpSubmit,
        handleLoginSubmit
    };
};

export default useFormAuth;
