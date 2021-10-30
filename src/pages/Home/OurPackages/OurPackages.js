import React from 'react';
import { Link } from 'react-router-dom';

const OurPackages = (props) => {
    const { _id, name, img, description, price } = props.singlePackage;
    return (
        <div>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title ">{name}</h4>
                <p className="card-text">{description.slice(0, 180)}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/bookOrder/${_id}`}><button type="button" className="btn btn-primary" >Book Now </button></Link>
                    <h5 className="text-primary">$ {price}</h5>
                </div>
            </div>
        </div>
    );
};

export default OurPackages;