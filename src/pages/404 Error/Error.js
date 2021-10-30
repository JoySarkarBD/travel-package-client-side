import React from 'react';
import errorImg from "./404-error.jpg"

const Error = () => {
    return (
        <div>
            <div className="bg-white d-flex justify-content-center">
                <img src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default Error;