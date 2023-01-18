import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopHeader from './TopHeader';
import { useTranslation } from 'react-i18next';
import logo from '../../../../assets/images/HBM-logos_transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    // Sticky top
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 200 ? setStickyClass('fixed top-0 left-0 z-50 w-full') : setStickyClass('relative');
        }
    };

    // To Close link after clicking link and bar sign
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const { t } = useTranslation();

    const menuItem = <>
        <li><Link to='/' className='text-white hover:text-accent text-[17px] font-medium'> {t('link-item-two')} </Link></li>
        <li><Link to='/' className='text-white hover:text-accent text-[17px] font-medium'> {t('link-item-three')} </Link></li>
        <li><Link to='/' className='text-white hover:text-accent text-[17px] font-medium'> {t('link-item-four')} </Link></li>
        {/* <li><Link to='/' className='text-white hover:text-accent text-[17px] font-medium'>Services</Link></li> */}
        <li><Link to='/' className='text-white hover:text-accent text-[17px] font-medium'> {t('link-item-five')} </Link></li>
        <li><Link to='/contact' className='text-white hover:text-accent text-[17px] font-medium'> {t('link-item-one')} </Link></li>
    </>;

    return (
        <header>
            {/* Top Header Part */}
            <TopHeader></TopHeader>

            {/* Main Header Part */}
            <div className={`bg-primary py-0 ${stickyClass}`}>
                <div className="w-full md:w-11/12 px-4 md:px-6 mx-auto py-0 navbar">
                    <div className="navbar-start">
                        <Link className="flex items-center" to='/'>
                            <img className='w-[80px] md:w-[100px]' src={logo} alt="logo" />
                        </Link>
                        <div className="dropdown" onClick={toggle}>
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <FontAwesomeIcon className='w-6 h-6 text-white' icon={faBars}></FontAwesomeIcon>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 pb-1 shadow bg-primary w-52 ml-[-150px]">
                                {isOpen ? [menuItem] : ''}
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