import React from 'react';
import './PopularProduct.css';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTranslation } from 'react-i18next';

const PopularProduct = () => {

    const { t } = useTranslation();

    const popularProducts = [
        {
            id: "01",
            image: "https://i.ibb.co/DrJG5WW/banner-first.jpg"
        },
        {
            id: "02",
            image: "https://i.ibb.co/fYmcmQh/banner-second.jpg"
        },
        {
            id: "03",
            image: "https://i.ibb.co/KxZgXgx/banner-third.jpg"
        },
        {
            id: "04",
            image: "https://i.ibb.co/DrJG5WW/banner-first.jpg"
        },
        {
            id: "05",
            image: "https://i.ibb.co/fYmcmQh/banner-second.jpg"
        },
        {
            id: "06",
            image: "https://i.ibb.co/KxZgXgx/banner-third.jpg"
        }
    ];

    return (
        <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pb-5 bg-white'>
            <h2 className='text-center text-4xl font-extrabold font-serif pb-1'> {t('popular-product-title-second')} <span className='text-primary'> {t('popular-product-title-first')} </span></h2>
            <div className='pt-8'>
                <Swiper
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        1096: {
                            slidesPerView: 3
                        },
                        1140: {
                            slidesPerView: 4,
                        },
                    }}

                    slidesPerView={1}
                    spaceBetween={30}
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
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {
                            popularProducts.map(product => <SwiperSlide key={product.id} className='popular-product pb-12'>
                                <div className='slide-content'>
                                    <img src={product.image} alt="productImage" />
                                </div>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
                {
                    popularProducts.map(product => <div className='mb-4 lg:mb-0'>

                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularProduct;