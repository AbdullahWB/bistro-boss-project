import React, { useEffect, useState } from 'react';
import SectionTittle from '../../../Components/SectionTittle';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menus] = useMenu()
    const popular = menus.filter(item => item.category === 'popular')
    return (
        <section>
            <SectionTittle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTittle>
            <div className='grid lg:grid-cols-2'>
                {
                    popular.map(menu => <MenuItems
                        key={menu._id}
                        menu={menu}
                    ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;