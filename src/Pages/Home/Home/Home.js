import React, { useEffect, useState } from 'react';
import Categories from '../../Categories/Categories';
import About from '../About/About';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedItems></AdvertisedItems>
            <About></About>
        </div>
    );
};

export default Home;