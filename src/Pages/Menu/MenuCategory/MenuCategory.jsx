import React from 'react';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import Cover from '../../../Shared/Cover/Cover';

const MenuCategory = ({ items, coverImg, title, coverMenu }) => {
    return (
        <>
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
        </>
    );
};

export default MenuCategory;