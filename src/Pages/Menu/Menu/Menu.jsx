import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import img1 from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Menu</title>
            </Helmet>
            <Cover
                img={img1}
                title={"OUR MENU"}
                menu={"Would you like to try a dish?"}
            ></Cover>
        </div>
    );
};

export default Menu;