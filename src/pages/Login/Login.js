import React from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "./Login.css";

const Login = () => {
    const {
        signInWithEmail,
        googleSignIn,
        userEmail,
        userPassword,
        setUser,
        setError,
        setIsLoading

    } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";


    const googleLogin = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url)
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h2 className="card-title text-center mb-5 fw-light">Sign In</h2>
                                <div>
                                    <div className="form-floating mb-3">
                                        <input onChange={userEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={userPassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <div className="d-grid">
                                        <button onClick={signInWithEmail} className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                            in</button>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="d-grid mb-2">
                                        <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit" onClick={googleLogin}>
                                            <i className="fab fa-google me-2"></i> Sign in with Google
                                        </button>
                                    </div>
                                    <Link to="/register"> <a href="/"> Don't have an account? Create An Account....!</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;