import { faLifeRing, faShieldAlt, faShippingFast, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-14 bg-white'>
            <h2 className='text-center font-bold text-3xl font-serif'><span className='text-primary pb-2'>Why</span> Choose Us</h2>
            <p className='text-center text-xl'>We Respect our commitments & Customers.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10'>
                <div className='text-center px-4 py-7 shadow-lg mb-6 lg-mb-0'>
                    <FontAwesomeIcon className='bg-white px-4 py-5 border-2 border-primary hover:text-white hover:bg-primary text-4xl text-primary rounded-full' icon={faShippingFast}></FontAwesomeIcon>
                    <h4 className='text-2xl text-center font-serif text-primary pb-1 pt-4 font-bold'>Time</h4>
                    <p>
                        We are broadly appreciated in the industry because of our on-time delivery.
                    </p>
                </div>
                <div className='text-center px-4 py-7 shadow-lg mb-6 lg-mb-0'>
                    <FontAwesomeIcon className='bg-white px-[18px] py-5 border-2 border-primary hover:text-white hover:bg-primary text-4xl text-primary rounded-full' icon={faStar}></FontAwesomeIcon>
                    <h4 className='text-2xl text-center font-serif text-primary pb-1 pt-4 font-bold'>Professional</h4>
                    <p>We value our customer needs and  have a team of highly talented professionals.</p>
                </div>
                <div className='text-center px-4 py-7 shadow-lg mb-6 lg-mb-0'>
                    <FontAwesomeIcon className='bg-white p-4 border-2 border-primary text-4xl text-primary hover:text-white hover:bg-primary rounded-full' icon={faLifeRing}></FontAwesomeIcon>
                    <h4 className='text-2xl text-center font-serif text-primary pt-4 pb-1 font-bold'>Guarantee</h4>
                    <p>100% satisfaction guarantee. If you're not happy, our job isn't done</p>
                </div>
                <div className='text-center px-8 py-7 shadow-lg mb-6 lg-mb-0'>
                    <FontAwesomeIcon className='bg-white p-4 border-2 border-primary text-4xl text-primary hover:text-white hover:bg-primary rounded-full' icon={faShieldAlt}></FontAwesomeIcon>
                    <h4 className='text-2xl text-center font-serif text-primary pt-4 pb-1 font-bold'>Secure</h4>
                    <p>We provide the highest level of secured service to our clients.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;