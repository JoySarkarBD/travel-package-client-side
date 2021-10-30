import React from 'react';
import img from '../../Slider-Img/slider-3.jpg'

const About = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex">
                    <div className="col-md-6">
                        <h1>About Us</h1>
                        <p>The thing is, you cannot ask people to coexist by having one side bow their heads and rely on a solution that is only good for the other side. What you can do is stop blaming each other and engage in dialogue with one person at a time. Everyone knows that violence begets violence and breeds more hatred. We need to find our way together. I feel I cannot rely on the various spokespersons who claim they act on my behalf. Invariably they have some agenda that doesn't work for me. Instead, I talk to my patients, to my neighbors and colleagues--Jews, Arabs--and I find out they feel as I do: we are more similar than we are different, and we are all fed up with the violence.</p>
                    </div>
                    <div className="col-md-6">
                        <div><img className="w-100" src={img} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;