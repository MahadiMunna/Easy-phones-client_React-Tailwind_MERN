import React, { useEffect, useState } from 'react';
import Categories from '../../Categories/Categories';
import Banner from '../Banner/Banner';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;