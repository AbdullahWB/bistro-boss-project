import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import img1 from '../../../assets/menu/banner3.jpg'
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/pizza-bg.jpg'
import img4 from '../../../assets/menu/salad-bg.jpg'
import img5 from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTittle from '../../../Components/SectionTittle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menus] = useMenu()
    const dessert = menus.filter(item => item.category === 'dessert')
    const offered = menus.filter(item => item.category === 'offered')
    const soup = menus.filter(item => item.category === 'soup')
    const salad = menus.filter(item => item.category === 'salad')
    const pizza = menus.filter(item => item.category === 'pizza')


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
            <SectionTittle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTittle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory
                coverImg={img2}
                title={"DESSERTS"}
                coverMenu={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={dessert}
            ></MenuCategory>
            <MenuCategory
                coverImg={img3}
                title={"PIZZA"}
                coverMenu={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={pizza}
            ></MenuCategory>
            <MenuCategory
                coverImg={img4}
                title={"SALADS"}
                coverMenu={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={salad}
            ></MenuCategory>
            <MenuCategory
                coverImg={img5}
                title={"SOUPS"}
                coverMenu={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={soup}
            ></MenuCategory>
        </div>
    );
};

export default Menu;