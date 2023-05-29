import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaHome, FaCalendarAlt, FaStar, FaAddressBook, FaHamburger, FaShoppingBag, FaEnvelopeOpen } from 'react-icons/fa';

const DashBoard = () => {
    // const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data
    const isAdmin = true;


    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/home'><FaWallet></FaWallet>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaWallet></FaWallet>add items</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet>add items</NavLink></li>
                                <li><NavLink to='/dashboard/myCart'><FaWallet></FaWallet>manage items</NavLink></li>
                                <li><NavLink to='/dashboard/review'><FaWallet></FaWallet>Manage bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaWallet></FaWallet>all users</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/home'><FaWallet></FaWallet>User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaWallet></FaWallet>reservation</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet>payment history</NavLink></li>
                                <li><NavLink to='/dashboard/myCart'><FaWallet></FaWallet>my cart</NavLink></li>
                                <li><NavLink to='/dashboard/review'><FaWallet></FaWallet>add review</NavLink></li>
                                <li><NavLink to='/dashboard/booking'><FaWallet></FaWallet>my booking</NavLink></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaWallet></FaWallet>Home</NavLink></li>
                        <li><NavLink to='/menu'><FaWallet></FaWallet>Menu</NavLink></li>
                        <li><NavLink to='/order/:category'><FaWallet></FaWallet>Shop</NavLink></li>
                        <li><NavLink to='/dashboard/contact'><FaWallet></FaWallet>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;