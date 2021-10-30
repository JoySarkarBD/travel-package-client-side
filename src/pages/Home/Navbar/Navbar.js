import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import "./Navbar.css"

const Navbar = () => {

    const { user, logOut } = useAuth();

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
                <div className="container">
                    <div className="col-md-3">
                        <a className="navbar-brand text-light" href="/">Travel-<span className="text-secondary">Packages</span></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/home"><a className="nav-link active text-light text-design" aria-current="page" href="/">Home</a></Link>

                            <Link to="/packages"><a className="nav-link active text-light" aria-current="page" href="/">Packages</a></Link>

                            {user.email && <Link to="/myOrders"><a className="nav-link active text-light" aria-current="page" href="/">My Orders</a></Link>}

                            {user.email && <Link to="/manageAllOrders"><a className="nav-link active text-light" aria-current="page" href="/">Manage  Orders</a></Link>}

                            {user.email && <Link to="/addAnewPackage"><a className="nav-link active text-light" aria-current="page" href="/">Add New Package</a></Link>}

                            <Link to="/contact"><a className="nav-link active text-light" aria-current="page" href="/">Contact</a></Link>
                            <Link to="/about"><a className="nav-link active text-light" aria-current="page" href="/">About Us</a></Link>

                            {!user?.email ?
                                <Link to="/login"><a className="nav-link active text-light" aria-current="page" href="/">Login</a></Link> :
                                <Link onClick={logOut} to="/"><a className="nav-link active text-light" aria-current="page" href="/">Log out</a></Link>}

                            {user?.email && <p className="nav-link active text-light" aria-current="page" href="/">Sign in as: {user?.displayName}</p>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;