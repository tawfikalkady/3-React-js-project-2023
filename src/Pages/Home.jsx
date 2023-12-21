// rsc

import React from 'react';
import Banner from './Shared Pages/Banner';
import Banner2 from './Shared Pages/Banner2';
import Category from './Shared Pages/Category';
import PopularMenu from './Shared Pages/PopularMenu';
import Recommend from './Shared Pages/Recommend';
import Featured from './Shared Pages/Featured';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Banner2/>
            <PopularMenu/>
            <Recommend/>
            <Featured/>
            <Testimonial/>
        </div>
    );
};

export default Home;