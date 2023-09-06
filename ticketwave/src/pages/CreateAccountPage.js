import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/CreateAccountPage.css';
import { Button, Input, Space, Alert } from 'antd';

export const CreateAccountPage = () => {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertLength, setShowAlertLength] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const returnToLogin = () => {
        navigate("/login");
    } 

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };


    const signUp = () => {
        if(!name || name.trim() === ""
                 || !email || email.trim() === "" || !email.match(emailRegex)
                 || !password || password.trim() === "") {
            setShowAlert(true);
           
        } else {
            setShowAlert(false);
        }

        if(name.trim().length < 8 || password.trim().length < 8){
            setShowAlertLength(true);
        } else {
            setShowAlertLength(false);
        }
    } 

    return (
        <div className='parent'>
            <div className='createAccount'>
                <h1>Create a new account</h1>
                <Input
                    placeholder='Full Name'
                    className='inputs'
                    value={name}
                    onChange={handleName}
                />

                <Input
                    placeholder='Email'
                    className='inputs'
                    value={email}
                    onChange={handleEmail}
                />                
                <Input.Password
                    className='custom-password-input'
                    placeholder="Password"
                    visibilityToggle={{
                        visible: passwordVisible,
                        onVisibleChange: setPasswordVisible,
                    }}
                    onChange={handlePassword}
                />

                {showAlert && 
                <Alert
                className='alertBox'
                message="Inputs are invalid!"
                type="warning" 
                showIcon />}

                {showAlertLength && 
                <Alert
                className='alertBox'
                message="Username/Password has to be least 8 characters!"
                type="warning" 
                showIcon />}
            
                <button className='signUp' onClick={() => signUp()}>Sign up</button>
                <div className='haveAccount'>
                    <span> Already have an account?
                        <span className='signIn' onClick={() => returnToLogin()}> Sign in</span>
                    </span>
                </div>
            </div>
         </div>
    );
}