import React from 'react';
import './Protective.css';
import { useTranslation } from 'react-i18next';

const Protective = () => {

    const { t } = useTranslation();

    return (
        <div className='protective-part py-14 h-[450px] flex items-center'>
            <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto py-14'>
                <h2 className='text-4xl font-bold font-serif text-white items-center'>
                    {t('protective-product-title')}
                </h2>
                <p className='text-white text-lg'>{t('protective-product-content')}</p>
            </div>
        </div>
    );
};

export default Protective;