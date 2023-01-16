import React from 'react';
import './Banner.css';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Banner = () => {

    const { t} = useTranslation();

    return (
        <div className='bg-secondary'>
            <div className=''>
                <div className='slider'>
                    <div className='container'>
                        <Swiper
                            breakpoints={{
                                200: {
                                    slidesPerView: 1,
                                },
                                // 767: {
                                //     slidesPerView: 2,
                                // },
                                // 1140: {
                                //     slidesPerView: 3,
                                // },
                            }}

                            slidesPerView={1}
                            // spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={true}
                            navigation={true}
                            modules={[Pagination, Navigation, A11y, Autoplay]}
                            className="mySwiper"
                        >
                            <div className=' w-full md:w-11/12 px-2 md:px-6 mx-auto banner-content'>
                                <h2 className='text-white font-serif text-xl sm:text-2xl lg:text-4xl font-bold'>
                                    {t('banner-title-one')}
                                    <br />
                                    {t('banner-title-two')}
                                </h2>
                                <div className='mt-4'>
                                    <button className='btn bg-primary mr-4'>{t('order-button')}</button>
                                    <button className='btn border-2 border-primary bg-secondary text-primary hover:text-white'>
                                        <a href='tel:+8801872238027'>
                                            <FontAwesomeIcon className='pr-2' icon={faPhoneAlt}></FontAwesomeIcon>
                                            {t('call-button')}
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <SwiperSlide className='slide first-slide'>
                                <div className='slide-content'>
                                    {/* <img src={bannerFirst} alt="" /> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='slide second-slide'>
                                <div className='slide-content'>
                                    {/* <img className='' src={bannerSecond} alt="" /> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='slide third-slide'>
                                <div className='slide-content'>
                                    {/* <img className='' src={bannerThird} alt="" /> */}
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;