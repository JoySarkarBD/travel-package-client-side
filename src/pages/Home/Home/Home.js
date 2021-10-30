import React from 'react';
import Branding from '../Branding/Branding';
import Packages from '../Packages/Packages';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Packages></Packages>
            <Review></Review>
            <Branding></Branding>
        </div>
    );
};

export default Home;