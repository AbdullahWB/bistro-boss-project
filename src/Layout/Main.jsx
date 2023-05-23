import React from 'react';
import Nav from '../Shared/Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer.jsx/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;