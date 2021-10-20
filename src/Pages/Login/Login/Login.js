import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin, handleResetPassword, handleNameChange, handleGoogleSignIn } = useAuth();
    const location = useLocation();

    const history = useHistory();

    const redirect_uri = location.state?.from || '/';

    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div>
            <div>
                <div className="container text-center mt-5 mb-3">
                    <form className="form-design shadow-2xl" onSubmit={handleRegistration}>
                        <h3 className="text-design4 fw-bolder mt-5 mb-5">Please {isLogin ? 'Login' : 'Register'}</h3>
                        {!isLogin && <div className="row mb-3">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label text-left">Name:</label>
                            <div className="col-sm-10">
                                <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" required />
                            </div>
                        </div>}
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-left">Email:</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-left">Password:</label>
                            <div className="col-sm-10">
                                <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check text-left">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Registered ?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger">{error}</div>
                        <Button type="submit" className="btn btn-success mx-2">
                            {isLogin ? 'Login' : 'Register'}
                        </Button>
                        <Button type="button" onClick={handleResetPassword} className="btn btn-danger mx-2">Reset Password</Button>

                    </form>
                </div>
                <br />
                <hr className="container fw-bolder text-white" />
                <br />
                <Button className="mb-5 fw-bolder fs-5" variant="warning" onClick={signInUsingGoogle}>Google Sign In <FontAwesomeIcon icon={faGooglePlusG} /></Button>
            </div>
        </div>
    );
};


export default Login;