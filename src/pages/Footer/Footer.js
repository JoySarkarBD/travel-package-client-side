import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="bg-dark sticky-footer">
            <div className="container mx-auto pb-5">
                <div className="row">
                    <div className="col-md-4 text-white mt-5">
                        <h2>Travel-Packages</h2>
                        <small>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere.</small>
                    </div>
                    <div className="col-md-2 mt-5">
                        <Link to="/home"><a className="nav-link active text-light" aria-current="page" href="/">Home</a></Link>
                        <Link to="/home"><a className="nav-link active text-light" aria-current="page" href="/">Packages</a></Link>
                        <Link to="/home"><a className="nav-link active text-light" aria-current="page" href="/">Contact</a></Link>
                        <Link to="/home"><a className="nav-link active text-light" aria-current="page" href="/">About Us</a></Link>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div>
                            <h6 className="text-white">The best travel quotes are often the deepest and most powerful. As a travel blogger, I always look to travel quotes for guidance, wanderlust, and inspiration. For years, I’ve been collecting quotes about travel while traveling the world, and always enjoy reflecting on them in my day-to-day life. Everyone has a different lens through which they view the world, which is why it’s important to heed the advice and insight of others.</h6>
                            <h6 className="text-white">- By Brade David</h6>
                        </div>
                    </div>
                    <small className="text-white mt-5 text-center">Copyright © 2021 All Right Reserved, Travel-Packages JS Inc.</small>
                </div>
            </div>
        </div >
    );
};

export default Footer;