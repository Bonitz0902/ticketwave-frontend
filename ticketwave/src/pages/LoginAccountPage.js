import { Form, Input, Alert } from 'antd';
import '../css/LoginAccountPage.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const LoginAccountPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const goToSignUp = () => {
        navigate("/createAccount");
    }

    const signIn = () => {
        if (!email || email.trim() === ""
            || !password || password.trim() === "") {
            setShowAlert(true);

        } else {
            setShowAlert(false);
        }
    }

    return (
        <>
            <div className="container">
                <div className='container-form'>
                    <div className='login-form-title'>
                        <h1>Sign in to <br />your account</h1>
                    </div>
                    <Form
                        className='login-form'
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="username/email"
                        >
                            <Input
                                className='login-form-inputs'
                                placeholder='Username/Email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                        >
                            <Input.Password
                                className='login-form-inputs'
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <br />
                            <a
                                className='login-form-forgot'
                                href=''
                            >
                                Forgot your password?
                            </a>
                        </Form.Item>
                        {showAlert &&
                            <Alert
                                className='alertBox'
                                message="Inputs are invalid!"
                                type="warning"
                                showIcon />}
                        <Form.Item>
                            <button
                                type='primary'
                                htmlType='submit'
                                className='login-form-button'
                                block
                                onClick={() => signIn()}
                            >
                                Sign in
                            </button>
                            <br />
                            <span>Don't have an account yet? &nbsp;
                                <span className='login-form-sign-up' onClick={() => goToSignUp()}>Sign up</span>
                            </span>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}