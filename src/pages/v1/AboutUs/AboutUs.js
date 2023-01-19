import React from 'react';
import { useTranslation } from 'react-i18next';
import chairman from '../../../assets/images/chgairman-duplicate.png';

const AboutUs = () => {

    const { t } = useTranslation();

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-10'>
            {/* About us means company */}
            <div className='bg-secondary px-3 rounded mb-6 py-10'>
                <h2 className='text-center text-4xl text-primary font-serif font-extrabold pb-6'> {t('about-us-title')} </h2>
                <p className='pb-6 text-center'> <span className='font-bold'>{t('company-name')}</span> {t('about-us-content-first')}</p>
                <p className='text-center'>{t('about-us-content-second')}</p>
            </div>
            {/* About Chairman */}
            <div className='bg-secondary px-6 rounded py-10'>
                <h2 className='text-center text-4xl text-primary font-serif font-extrabold pb-6'> {t('chairman-title')} </h2>
                <div className='flex-none md:flex justify-between items-center'>
                    <div className='w-full flex justify-center mb-6 md:mb-0' >
                        <img className='h-[300px]' src={chairman} alt="chairmanImage" />
                    </div>
                    <p className='w-full'> <span className='font-bold'>{t('chairman-name')}</span> {t('chairman-content')}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;