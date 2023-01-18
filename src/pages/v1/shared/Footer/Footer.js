import { faFacebookF, faFacebookMessenger, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/HBM-logos_transparent.png'
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <footer className='py-4 bg-white'>
            {/* Top Footer Part */}
            <div className='py-3'>

                {/* Logo */}
                <div className='flex justify-center py-4'>
                    <img className='w-[230px]' src={logo} alt="logo" />
                </div>

                {/* About us */}
                <div className='w-full md:w-8/12 mx-auto px-5 py-3'>
                    <p className='text-center text-xl'>{t('footer-about-content')}</p>
                </div>

                {/* Social Icon part */}
                <div className='flex justify-center py-6'>
                    <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[13px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faFacebookF}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[9px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faWhatsapp}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[9px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faFacebookMessenger}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[10px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faLinkedinIn}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[10px] py-2 hover:bg-primary hover:text-white' icon={faInstagram}></FontAwesomeIcon></span>
                </div>
            </div>

            {/* Link Part */}
            <div className='PY-2'>
                <ul style={{ borderTop: '1px solid #242F9B', borderBottom: '1px solid #242F9B' }}>
                    <li className='py-7 w-full md:w-11/12 px-4 md:px-6 mx-auto flex-none md:flex justify-center'>
                        <Link to='/home' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center pb-2'>{t('link-item-two')}</Link>
                        <Link to='/' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center pb-2'>{t('link-item-three')}</Link>
                        <Link to='/' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center pb-2'>{t('link-item-four')}</Link>
                        {/* <Link to='/' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center pb-2'>Services</Link> */}
                        <Link to='/' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center pb-2'>{t('link-item-five')}</Link>
                        <Link to='/contact' className='text-xl font-medium uppercase px-5 text-primary hover:text-black block md:flex text-center'>{t('link-item-one')}</Link>
                    </li>
                </ul>
            </div>

            {/* Bottom Footer Part */}
            <div className='w-full md:w-11/12 px-4 md:px-6 mx-auto flex-none md:flex justify-between pt-6 pb-2'>
                <p className='text-xl text-center md:text-left font-semibold pb-3 md:pb-0'> {t('all-right-reserved')} </p>
                <p className='text-xl font-semibold text-center md:text-right'>{t('powered-by-first')} <span className='text-primary'>{t('powered-by-last')}</span></p>
            </div>
        </footer>
    );
};

export default Footer;