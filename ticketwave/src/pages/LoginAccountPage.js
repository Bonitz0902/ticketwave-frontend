import { Form, Input, Alert } from 'antd';
import '../css/LoginAccountPage.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useApis } from '../hooks/useHooks';
import { ArrowLeftOutlined } from "@ant-design/icons";

export const LoginAccountPage = () => {
    const navigate = useNavigate();
    const { loadAccount } = useApis();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const account = useSelector((state) => state.loginSlice.loginAccount);

    loadAccount(email, password);

    const goToSignUp = () => {
        navigate("/createAccount");
    }

    const invalidInput = !email.trim() || !password.trim();

    const signIn = () => {
        if (account === email && !invalidInput) {
            navigate('/booking');
        }
        if (account !== email || invalidInput) {
            setShowAlert(true);
        }
    }

    return (
        <>
            <ArrowLeftOutlined onClick={() => navigate(-1)} className={"arrowBack"} />
            <div className="container">
                <div className='container-form'>
                    <div className='login-form-title'>
                        <h1>Sign in to <br />your account</h1>
                    </div>
                    <Form
                        className='login-form'
                        initialValues={{ remember: true }}
                    >
                        <Form.Item>
                            <Input
                                className='login-form-inputs'
                                placeholder='Email'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Form.Item>
                        <Form.Item>
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
                                className='login-form-button'
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