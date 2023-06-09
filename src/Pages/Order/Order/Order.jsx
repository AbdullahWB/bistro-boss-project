import React, { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['Salad','pizza','soups','desserts','drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)


    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menus] = useMenu(); 


    const dessert = menus.filter(item => item.category === 'dessert')
    const drinks = menus.filter(item => item.category === 'drinks')
    const soup = menus.filter(item => item.category === 'soup')
    const salad = menus.filter(item => item.category === 'salad')
    const pizza = menus.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Order Food</title>
            </Helmet>
            <Cover img={orderImg} title={"OUR SHOP"} menu={"Would you like to try a dish?"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;