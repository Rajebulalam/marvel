import { faFacebookF, faFacebookMessenger, faLinkedinIn, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TopHeader = () => {
    return (
        <div className='bg-secondary py-2'>
            <div className='w-full md:w-11/12 px-4 md:px-6 mx-auto'>
                <div className='flex justify-center md:justify-between items-center'>
                    <div className='hidden md:flex'>
                        <span className='flex items-center text-[16px] mr-3'>
                            <FontAwesomeIcon icon={faPhoneAlt} className='text-black pr-3'></FontAwesomeIcon>
                            + 000 00 000 000
                        </span>
                        <span className='flex items-center text-[17px]'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-black pr-3'></FontAwesomeIcon>
                            aaaaaaaaaa@gmail.com
                        </span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[13px] py-2 mr-3' icon={faFacebookF}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[10px] py-2 mr-3' icon={faWhatsapp}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[9px] py-2 mr-3' icon={faFacebookMessenger}></FontAwesomeIcon></span>
                        <span><FontAwesomeIcon className='text-xl font-bold border border-primary rounded-full px-[10px] py-2' icon={faLinkedinIn}></FontAwesomeIcon></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;