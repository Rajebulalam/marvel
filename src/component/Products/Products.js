import React from 'react';
import './Products.css';
import tiles from '../../assets/images/banner-first2.jpg';
import { useTranslation } from 'react-i18next';

const Products = () => {

    const { t } = useTranslation();

    return (
        <div className='bg-white'>
            <div className=' w-full md:w-11/12 px-4 md:px-6 mx-auto pt-14'>
                <h2 className='text-4xl text-center font-bold font-serif'> {t('product-title-first')} <span className='text-primary'> {t('product-title-second')} </span></h2>
                <p className='text-center text-xl'> {t('product-subtitle')} </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-12'>
                    <div className='mb-5 lg:mb-0 shadow-xl product'>
                        <img className='h-56' src={tiles} alt="tiles" />
                    </div>
                    <div className='mb-5 lg:mb-0 shadow-xl product'>
                        <img className='h-56' src={tiles} alt="tiles" />
                    </div>
                    <div className='mb-5 lg:mb-0 shadow-xl product'>
                        <img className='h-56' src={tiles} alt="tiles" />
                    </div>
                    <div className='mb-5 lg:mb-0 shadow-xl product'>
                        <img className='h-56' src={tiles} alt="tiles" />
                    </div>
                    <div className='mb-5 lg:mb-0 shadow-xl product'>
                        <img className='h-56' src={tiles} alt="tiles" />
                    </div>
                    <div className='mb-5 lg:mb-0 shadow-xl product'>
                        <img className='h-56' src={tiles} alt="tiles" />
                    </div>
                    <div className='mb-5 lg:mb-0 shadow-xl product'>
                        <img className='h-56' src={tiles} alt="tiles" />
                    </div>
                    <div className='mb-5 lg:mb-0 shadow-xl product'>
                        <img className='h-56' src={tiles} alt="tiles" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;