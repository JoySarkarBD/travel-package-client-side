import React, { useEffect, useState } from 'react';
import EachPackage from './EachPackage/EachPackage';

const Packages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://warm-sands-58745.herokuapp.com/packages')
            // fetch('/data.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Our Packages</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto mb-5">
                {
                    packages.map(eachPackage => <div className="col">
                        <div className="card">
                            <EachPackage key={eachPackage._id} eachPackage={eachPackage}></EachPackage>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Packages;