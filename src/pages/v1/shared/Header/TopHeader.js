import { faFacebookF, faFacebookMessenger, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faLanguage, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import i18next from 'i18next';
import { ExternalLink } from 'react-external-link';

const TopHeader = () => {

    const [english, SetEnglish] = useState(true);
    const [arabic, setArabic] = useState(false);

    const englishHandler = () => {
        setArabic(false);
        SetEnglish(true)
    }

    const arabicHandler = () => {
        setArabic(true);
        SetEnglish(false);
    }

    return (
        <div className='py-2 bg-white'>
            <div className='w-full md:w-11/12 px-6 md:px-6 mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='hidden md:flex'>
                        <span className='flex items-center text-[16px] mr-3'>
                            <FontAwesomeIcon icon={faPhoneAlt} className='text-black pr-3'></FontAwesomeIcon>
                            +971 588822254
                        </span>
                        <span className='flex items-center text-[17px]'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-black pr-3'></FontAwesomeIcon>
                            onestaramin2020@gmail.com
                        </span>
                    </div>

                    <div className='flex justify-center items-center'>
                        {
                            english ? <div onClick={arabicHandler}>
                                <button className='text-center' onClick={() => i18next.changeLanguage('ar')}>
                                    <FontAwesomeIcon className='text-xl sm:text-4xl text-primary flex justify-center mx-auto' icon={faLanguage}></FontAwesomeIcon>
                                    عربي
                                </button>
                            </div> : <div className='text-center' onClick={englishHandler}>
                                <button onClick={() => i18next.changeLanguage('en')}>
                                    <FontAwesomeIcon className='text-xl sm:text-4xl text-primary flex justify-center mx-auto' icon={faLanguage}></FontAwesomeIcon>
                                    <span>English</span>
                                </button>
                            </div>
                        }
                    </div>

                    {/* Social Icon */}
                    <div>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[13px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faFacebookF}></FontAwesomeIcon></span>
                        <span>
                            <ExternalLink href='https://wa.me/+8801872238027'>
                                <FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[9px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faWhatsapp}></FontAwesomeIcon>
                            </ExternalLink>
                        </span>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[9px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faFacebookMessenger}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[10px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faLinkedinIn}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[10px] py-2 hover:bg-primary hover:text-white' icon={faInstagram}></FontAwesomeIcon></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;