import React, { useEffect, useState } from 'react';
import OurPackages from '../OurPackages/OurPackages';

const Packages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        // fetch('/data.json')
        fetch('https://warm-sands-58745.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <h3 className="mt-5 mb-5 text-center">Most Popular Packages</h3>



            <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto">
                {packages.length === 0 ?
                    <div className="spinner-border text-dark container" role="status">
                        <span className="visually-hidden text-center mx-auto ">Loading...</span>
                    </div>

                    :

                    packages.map(singlePackage => <div className="col">
                        <div className="card">
                            <OurPackages key={singlePackage._id} singlePackage={singlePackage}></OurPackages>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Packages;