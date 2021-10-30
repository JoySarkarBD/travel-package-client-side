import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../Hooks/useAuth";
const Register = () => {
    const { getName, getEmail, userRegistration, getPassword } =
        useAuth();
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h2 className="card-title text-center mb-5 fw-light">Sign Up</h2>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input onChange={getName} type="text" className="form-control" id="floatingInput" placeholder="name" />
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={getEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={getPassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="d-grid">
                                        <button onClick={userRegistration} className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                            up</button>
                                    </div>
                                    <Link to="/login"> <a href="/"> Have an account? Then login....!</a></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;