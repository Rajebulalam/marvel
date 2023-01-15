import { faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ExternalLink } from 'react-external-link';
import './WhatsApp.css';

const WhatsApp = () => {
    return (
        <div>
            <p title='Message on Whatsapp' className='bg-primary border border-secondary py-2 px-3 rounded-lg whatsapp-float'>
                <ExternalLink href='https://wa.me/+8801872238027'> <FontAwesomeIcon className='text-3xl text-secondary' icon={faWhatsapp}></FontAwesomeIcon> </ExternalLink>
            </p>
        </div>
    );
};

export default WhatsApp;