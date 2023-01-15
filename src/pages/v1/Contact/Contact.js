import { faEnvelope, faLocationDot, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact border-b-2 border-primary'>
            <div className='w-full lg:w-11/12 px-4 lg:px-6 mx-auto pt-14'>
                <h2 className='text-center text-4xl font-serif font-extrabold text-white pb-1'>Contact Us</h2>
                <p className='text-center text-xl'>Get in touch with us to know our latest products and offers</p>
                <div className='flex-none md:flex items-center py-14'>
                    <div className='w-full mb-4 lg:mb-0'>
                        <form>
                            <div className='flex items-center mb-2'>
                                <label htmlFor="name" className='mr-6 font-serif text-white font-medium'>Name:</label>
                                <input className='border border-primary rounded-md w-full p-2 outline-0' type="text" name="name" id="name" placeholder='Your name' />
                            </div>
                            <div className='flex items-center mb-2'>
                                <label htmlFor="email" className='mr-6 font-serif font-medium text-white'>Email:</label>
                                <input className='border border-primary rounded-md w-full p-2 outline-0' type="email" name="email" id="email" placeholder='Put your email' />
                            </div>
                            <div className='flex items-center mb-2'>
                                <label htmlFor="phone" className='mr-[22px] font-serif font-medium text-white'>Phone:</label>
                                <input className='border border-primary rounded-md w-full p-2 outline-0' type="text" name="phone" id="phone" placeholder='Your phone number' />
                            </div>
                            <div className='flex items-center mb-2'>
                                <label htmlFor="message" className='mr-2 font-serif font-medium text-white'>Message:</label>
                                <textarea className='border border-primary rounded-md w-full p-2 outline-0' name="message" id="message" cols="30" rows="10" placeholder='Write your message'></textarea>
                            </div>
                            <div className='flex justify-end mt-2'>
                                <button type="submit" className='btn btn-primary px-6 py-2'>Submit</button>
                            </div>
                        </form>
                    </div>

                    {/* Address */}
                    <div className='w-full lg:w-10/12 mx-auto px-4 lg:px-6'>
                        <div className='px-5 rounded'>
                            <div className='mb-4'>
                                <h3 className='text-2xl text-primary font-serif font-bold'> <FontAwesomeIcon icon={faLocationDot} ></FontAwesomeIcon> Address</h3>
                                <p className='pl-11 text-xl'>abc .......................................................</p>
                                <p className='pl-11 text-xl'>abc .......................................................</p>
                            </div>
                            <div className='mb-4'>
                                <h3 className='text-2xl text-primary font-serif font-bold'> <FontAwesomeIcon icon={faPhoneAlt} ></FontAwesomeIcon> Phone</h3>
                                <p className='pl-11 text-xl'>+880 000 000 000</p>
                                <p className='pl-11 text-xl'>+880 000 000 000</p>
                            </div>
                            <div className='mb-4'>
                                <h3 className='text-2xl text-primary font-serif font-bold'> <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon> Email</h3>
                                <p className='pl-11 text-xl'>abcdefghijkl@gmail.com</p>
                                <p className='pl-11 text-xl'>abcdefghijkl@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;