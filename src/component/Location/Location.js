import React from 'react';
import { useTranslation } from 'react-i18next';

const Location = () => {

    const { t } = useTranslation();

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-14 bg-white'>
            <h2 className='text-4xl font-serif pb-10 text-center font-bold text-black'> {t('location-title-first')} <span className='text-primary'> {t('location-title-second')}</span> </h2>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Dragon%20mall,%20Dubai%20UAE,%20HBM%20Stone%20Co.%20Ltd&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;