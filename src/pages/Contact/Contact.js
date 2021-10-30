import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="container px-1 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <h1>Contact with us</h1>
                        <div className="padding">
                            <h5 className="text-center mb-4">Fill those empty fields</h5>
                            <form className="form-card">
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name</label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)" /> </div>
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name</label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)" /> </div>
                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Email</label> <input type="text" id="email" name="email" placeholder="xxxxx@example.com" onblur="validate(3)" /> </div>
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone number</label> <input type="text" id="mob" name="mob" placeholder="+001-XXXX-XXXX" onblur="validate(4)" /> </div>
                                </div>

                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Whats in you mind?</label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" /> </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="form-group col-sm-6"> <button type="submit" className="btn-block btn-primary w-75">Send</button> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;