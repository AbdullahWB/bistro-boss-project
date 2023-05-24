import React from 'react';
import Banner from '../Banner.jsx/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;