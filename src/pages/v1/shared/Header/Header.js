import React from 'react';
import { Link } from 'react-router-dom';
import TopHeader from './TopHeader';

const Header = () => {

    const menuItem = <>
        <li><Link to='/' className='text-white hover:text-accent text-[17px] font-medium'>Home</Link></li>
        <li><Link to='/' className='text-white hover:text-accent text-[17px] font-medium'>Products</Link></li>
        <li><Link to='/' className='text-white hover:text-accent text-[17px] font-medium'>Services</Link></li>
        <li><Link to='/' className='text-white hover:text-accent text-[17px] font-medium'>Brands</Link></li>
        <li><Link to='/' className='text-white hover:text-accent text-[17px] font-medium'>Contact Us</Link></li>
    </>;

    return (
        <header>
            {/* Top Header Part */}
            <TopHeader></TopHeader>

            {/* Main Header Part */}
            <div className='bg-primary py-2'>
                <div className="w-full md:w-11/12 px-4 md:px-6 mx-auto navbar">
                    <div className="navbar-start">
                        <Link className="btn btn-ghost text-white normal-case text-xl font-extrabold">Logo</Link>
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary w-52 ml-[-150px]">
                                {menuItem}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItem}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;