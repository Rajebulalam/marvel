import { faLifeRing, faShieldAlt, faShippingFast, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {

    const { t } = useTranslation();

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-14 bg-white'>
            <h2 className='text-center font-bold text-3xl font-serif'><span className='text-primary pb-2'> {t('choose-us-title-first')} </span> {t('choose-us-title-second')} </h2>
            <p className='text-center text-xl'> {t('choose-us-subtitle')} </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-10'>
                <div data-aos="fade-up" data-aos-duration="2000" className='text-center px-4 py-7 shadow-lg mb-6 lg-mb-0'>
                    <FontAwesomeIcon className='bg-white px-4 py-5 border-2 border-primary hover:text-white hover:bg-primary text-4xl text-primary rounded-full' icon={faShippingFast}></FontAwesomeIcon>
                    <h4 className='text-2xl text-center font-serif text-primary pb-1 pt-4 font-bold'> {t('choose-us-card-first-title')} </h4>
                    <p>
                        {t('choose-us-card-first-content')}
                    </p>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000" className='text-center px-4 py-7 shadow-lg mb-6 lg-mb-0'>
                    <FontAwesomeIcon className='bg-white px-[18px] py-5 border-2 border-primary hover:text-white hover:bg-primary text-4xl text-primary rounded-full' icon={faStar}></FontAwesomeIcon>
                    <h4 className='text-2xl text-center font-serif text-primary pb-1 pt-4 font-bold'>{t('choose-us-card-second-title')}</h4>
                    <p>{t('choose-us-card-second-content')}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className='text-center px-4 py-7 shadow-lg mb-6 lg-mb-0'>
                    <FontAwesomeIcon className='bg-white p-4 border-2 border-primary text-4xl text-primary hover:text-white hover:bg-primary rounded-full' icon={faLifeRing}></FontAwesomeIcon>
                    <h4 className='text-2xl text-center font-serif text-primary pt-4 pb-1 font-bold'>{t('choose-us-card-third-title')}</h4>
                    <p>{t('choose-us-card-third-content')}</p>
                </div>
                <div data-aos="fade-down" data-aos-duration="2000" className='text-center px-8 py-7 shadow-lg mb-6 lg-mb-0'>
                    <FontAwesomeIcon className='bg-white p-4 border-2 border-primary text-4xl text-primary hover:text-white hover:bg-primary rounded-full' icon={faShieldAlt}></FontAwesomeIcon>
                    <h4 className='text-2xl text-center font-serif text-primary pt-4 pb-1 font-bold'>{t('choose-us-card-fourth-title')}</h4>
                    <p>{t('choose-us-card-fourth-content')}</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;