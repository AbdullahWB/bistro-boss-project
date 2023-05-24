import React from 'react';
import SectionTittle from '../../../Components/SectionTittle';
import img from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className='py-[130px] bg-fixed' style={{ backgroundImage: `url(${img})` }}>
            <SectionTittle
                heading={"Check it out"}
                subHeading={"FROM OUR MENU"}
            ></SectionTittle>
            <div className='flex text-white justify-center items-center py-8 px-16 gap-10'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className=''>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 border-b-white text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;