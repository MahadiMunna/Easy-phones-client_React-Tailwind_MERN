import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
        
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                    <label htmlFor="drawer-menu" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-menu" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/'>Reported items</Link></li>
                        <li><Link to='/'>My Products</Link></li>
                        <li><Link to='/'>Add a product</Link></li>
                        <li><Link to='/'>My Orders</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;