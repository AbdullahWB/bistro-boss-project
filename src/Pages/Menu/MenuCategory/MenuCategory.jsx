import React from 'react';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, coverImg, title, coverMenu }) => {
    return (
        <div>
            {title &&
                <Cover
                    img={coverImg}
                    title={title}
                    menu={coverMenu}
                ></Cover>
            }
            <div className='grid lg:grid-cols-2'>
                {
                    items.map(menu => <MenuItems
                        key={menu._id}
                        menu={menu}
                    ></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-0 border-b-4 border-b-black text-black'>Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;