import React from 'react';
import client from "../../../Client-img/client.jpg"
import "./Review.css"

const Review = () => {

    return (
        <div className="bg mt-5">
            <h1 className="pt-5 text-center">Cilent's Review</h1>
            <div className="row d-flex container mx-auto">
                <div className=" col-md-6 mt-5 mb-5">
                    <div className="card mb-3 style mx-auto">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={client} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">We are happy to make you happier</h5>
                                    <p className="card-text">Etiam porta sem malesuada magna mollis euismod. Nullam quis isus eget urna mollis ornare vel eu leo. Fusce dapibus, Aenean e u leo quam. Pellentesque ornare sem lacinia. Integer posuere erat a ante venenatis dapibus pos uere velit aliquet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="col-md-6 mt-5 mb-5">
                    <h3>Tell us whats in your mind</h3>
                    <input type="text" className="form-control w-100 mb-3" id="inputEmail3" placeholder="Enter your name" />
                    <textarea className="w-100 h-25" name="comment" placeholder="Write What inside your mind about us......!"></textarea>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Review;