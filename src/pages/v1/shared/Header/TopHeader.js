import { faFacebookF, faFacebookMessenger, faLinkedinIn, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import i18next from 'i18next';

const TopHeader = () => {

    const [english, SetEnglish] = useState(true);
    const [arabic, setArabic] = useState(false)

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
            <div className='w-full md:w-11/12 px-4 md:px-6 mx-auto'>
                <div className='flex justify-center md:justify-between items-center'>
                    <div className='hidden md:flex'>
                        <span className='flex items-center text-[16px] mr-3'>
                            <FontAwesomeIcon icon={faPhoneAlt} className='text-black pr-3'></FontAwesomeIcon>
                            + 000 00 000 000
                        </span>
                        <span className='flex items-center text-[17px]'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-black pr-3'></FontAwesomeIcon>
                            abc@gmail.com
                        </span>
                    </div>

                    <div className='flex items-center'>
                        {
                            english ? <div onClick={arabicHandler}>
                                <button className='btn btn-primary' onClick={() => i18next.changeLanguage('ar')}>Ar</button>
                            </div> : <div onClick={englishHandler}>
                                <button className='btn btn-primary mr-2' onClick={() => i18next.changeLanguage('en')}>En</button>
                            </div>
                        }
                        {/* {
                            arabic ?  <div onClick={englishHandler}>
                            <button className='btn btn-primary mr-2' onClick={() => i18next.changeLanguage('en')}>En</button>
                        </div> : ''
                        } */}

                    </div>

                    <div>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[13px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faFacebookF}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[9px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faWhatsapp}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[9px] py-2 mr-3 hover:bg-primary hover:text-white' icon={faFacebookMessenger}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[10px] py-2 hover:bg-primary hover:text-white' icon={faLinkedinIn}></FontAwesomeIcon></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;