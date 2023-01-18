import { faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope, faLocationDot, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {

    const { t } = useTranslation();

    return (
        <div className='contact border-b-2 border-primary'>
            <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-14'>
                <h2 className='text-center text-4xl font-serif font-extrabold text-primary pb-1'>
                    {t('contact-us-title')}
                </h2>
                <p className='text-center text-xl'>{t('contact-us-content')}</p>
                <div data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1000" className='flex-none md:flex items-center py-14'>
                    <div className='w-full mb-4 lg:mb-0'>
                        <form>
                            <div className='flex items-center mb-2'>
                                <label htmlFor="name" className='mr-6 font-serif text-primary font-medium'>{t('name')}</label>
                                <input className='border border-primary rounded-md w-full p-2 outline-0' type="text" name="name" id="name" placeholder={t('your-name')} />
                            </div>
                            <div className='flex items-center mb-2'>
                                <label htmlFor="email" className='mr-6 font-serif font-medium text-primary'>{t('email')}</label>
                                <input className='border border-primary rounded-md w-full p-2 outline-0' type="email" name="email" id="email" placeholder={t('your-email')} />
                            </div>
                            <div className='flex items-center mb-2'>
                                <label htmlFor="phone" className='mr-[22px] font-serif font-medium text-primary'>{t('phone')}</label>
                                <input className='border border-primary rounded-md w-full p-2 outline-0' type="text" name="phone" id="phone" placeholder={t('your-phone-number')} />
                            </div>
                            <div className='flex items-center mb-2'>
                                <label htmlFor="message" className='mr-2 font-serif font-medium text-primary'>{t('message')}</label>
                                <textarea className='border border-primary rounded-md w-full p-2 outline-0' name="message" id="message" cols="30" rows="10" placeholder={t('write-your-message')}></textarea>
                            </div>
                            <div className='flex justify-end mt-2'>
                                <button type="submit" className='btn btn-primary px-6 py-2'>{t('submit')}</button>
                            </div>
                        </form>
                    </div>

                    {/* Address */}
                    <div data-aos="fade-left" 
                        data-aos-duration="1000" className='w-full lg:w-10/12 mx-auto px-4 lg:px-6'>
                        <div className='px-5 rounded'>
                            <div className='mb-4'>
                                <h3 className='text-2xl text-primary font-serif font-bold'> <FontAwesomeIcon icon={faLocationDot} className='pr-4' ></FontAwesomeIcon> Address</h3>
                                <p className='pl-11 text-lg'> Hassan Building Fzco, Dragon Mall, <br /> Dubai UAE</p>
                            </div>
                            <div className='mb-4'>
                                <h3 className='text-2xl text-primary font-serif font-bold'> <FontAwesomeIcon icon={faPhoneAlt} className='pr-4' ></FontAwesomeIcon> Phone</h3>
                                <p className='pl-11 text-lg'> +971 588822254</p>
                            </div>
                            <div className='mb-4'>
                                <h3 className='text-2xl text-primary font-serif font-bold'> <FontAwesomeIcon icon={faWhatsapp} className='pr-4' ></FontAwesomeIcon> WhatsApp</h3>
                                <p className='pl-11 text-lg'>  052 8396492</p>
                                <p className='pl-11 text-lg'> 055 2982940</p>
                            </div>
                            <div className='mb-4'>
                                <h3 className='text-2xl text-primary font-serif font-bold'> <FontAwesomeIcon icon={faEnvelope} className='pr-4' ></FontAwesomeIcon> Email</h3>
                                <p className='pl-11 text-lg'>onestaramin2020@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;