import React, { useEffect, useState } from 'react';
import SectionTittle from '../../../Components/SectionTittle';
import MenuItems from '../../../Shared/MenuItems/MenuItems';

const PopularMenu = () => {
    const [menus, setMenus] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular');
                setMenus(popularItem)
            })
    }, [])
    return (
        <section>
            <SectionTittle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTittle>
            <div className='grid lg:grid-cols-2'>
                {
                    menus.map(menu => <MenuItems
                        key={menu._id}
                        menu={menu}
                    ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;