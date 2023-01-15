import React from 'react';
import Banner from '../../../component/Banner/Banner';
import Location from '../../../component/Location/Location';
import Products from '../../../component/Products/Products';
import Protective from '../../../component/Protective/Protective';
import WhyChooseUs from '../../../component/WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <WhyChooseUs></WhyChooseUs>
            <Protective></Protective>
            <Location></Location>
        </div>
    );
};

export default Home;