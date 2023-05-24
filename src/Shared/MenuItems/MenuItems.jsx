import React from 'react';

const MenuItems = ({ menu }) => {
    const { name, image, price, recipe } = menu;
    return (
        <div className='flex gap-5'>
            <img style={{borderRadius:'0px 200px 200px 200px'}} className='w-[118px] h-[104px]' src={image} alt="" />
            <div>
                <h1>{name}</h1>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItems;