import React from 'react';
import Nav from '../Shared/Nav/Nav';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer.jsx/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <Nav></Nav>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;