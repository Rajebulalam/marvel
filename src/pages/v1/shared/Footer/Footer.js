import { faFacebookF, faFacebookMessenger, faLinkedinIn, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/MR Tech-logos_black.png';

const Footer = () => {
    return (
        <footer className='py-4'>
            {/* Top Footer Part */}
            <div className='py-3'>

                {/* Logo */}
                <div className='flex justify-center py-4'>
                    <img className='w-[230px]' src={logo} alt="logo" />
                </div>

                {/* About us */}
                <div className='w-full md:w-8/12 mx-auto px-5 py-3'>
                    <p className='text-center text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni reiciendis placeat quaerat unde? Vel explicabo dicta porro, placeat atque, molestiae minus nisi expedita sed, nostrum necessitatibus. Nihil ipsa dolore ut velit quas pariatur qui eum minima? Consequuntur dolore soluta perferendis eos cumque eveniet qui dolores quaerat possimus pariatur! Sint quisquam, facere officia, est voluptatum nihil laboriosam eaque possimus quod doloribus nostrum molestias distinctio, fuga expedita! Ducimus iusto eum amet eligendi.</p>
                </div>

                {/* Social Icon part */}
                <div className='flex justify-center py-6'>
                    <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[13px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faFacebookF}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[9px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faWhatsapp}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[9px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faFacebookMessenger}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[10px] py-2 hover:bg-primary hover:text-white' icon={faLinkedinIn}></FontAwesomeIcon></span>
                </div>
            </div>

            {/* Link Part */}
            <div className='PY-2'>
                <ul style={{ borderTop: '1px solid #242F9B', borderBottom: '1px solid #242F9B' }}>
                    <li className='py-7 w-full md:w-11/12 px-4 md:px-6 mx-auto flex-none md:flex justify-center'>
                        <Link to='/' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center pb-2'>Home</Link>
                        <Link to='/' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center pb-2'>About Us</Link>
                        <Link to='/' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center pb-2'>Products</Link>
                        {/* <Link to='/' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center pb-2'>Services</Link> */}
                        <Link to='/' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center pb-2'>Brands</Link>
                        <Link to='/' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center'>Contact Us</Link>
                    </li>
                </ul>
            </div>

            {/* Bottom Footer Part */}
            <div className='w-full md:w-11/12 px-4 md:px-6 mx-auto flex-none md:flex justify-between pt-6 pb-2'>
                <p className='text-xl text-center md:text-left font-semibold pb-3 md:pb-0'>&copy; 2022 All Right Reserved By - Marvel</p>
                <p className='text-xl font-semibold text-center md:text-right'>Powered by <span className='text-primary'>MR Tech</span></p>
            </div>
        </footer>
    );
};

export default Footer;