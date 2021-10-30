import React from 'react';
import bannerImgOne from "../../../Slider-Img/slider-1.jpg"
import bannerImgTwo from "../../../Slider-Img/slider-2.jpg"
import bannerImgThree from "../../../Slider-Img/slider-3.jpg"
import "./Slider.css"

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bannerImgOne} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block position">
                            <h1>Paris and Bordeaux</h1>
                            <p>Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerImgTwo} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block position">
                            <h1>Rome, Milan, Madrid</h1>
                            <p>Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerImgThree} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block position">
                            <h1>Rome City Tour</h1>
                            <p>Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;