

import { useForm } from 'react-hook-form';
import Button from './Button';
import './ContactForm.css'
import { useState } from 'react';
import React from 'react';
import Footer from './Footer';

import emailjs from 'emailjs-com'

const Perlin = 'https://medinaenvironmentalcompany.com/wp-content/uploads/2024/06/Perlin-contour-1.png'
const defaultTitle = "Let's uncomplicate your environmental challenges"
const defaultText = "Think we'd be a good addition to your team? Tell us about your project below."




export default function ContactForm({title=defaultTitle, text=defaultText}) {
    
    
    const [emailOrPhone, setEmailOrPhone] = useState('email');

  const handleOptionChange = (event) => {
    setEmailOrPhone(event.target.value);
  };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
        } = useForm();
        
        const onSubmit = async (data) => {
            
            const { name, email, phone, message } = data;
            try {
                const templateParams = {
                  name,
                  email,
                  phone,
                  message
                };
                await emailjs.send(
                  import.meta.env.VITE_SERVICE_ID,
                  import.meta.env.VITE_TEMPLATE_ID,
                  templateParams,
                  import.meta.env.VITE_PUBLIC_KEY
                );
                reset();
              } catch (e) {
                console.log(e);
              }
            
            console.log('Name: ', name);
            console.log('Email: ', email);
            console.log('Phone #: ', phone);
            console.log('Message: ', message);
            };

    return(
    <div className='w-screen h-fit relative bg-Dark-Navy'>
        <div style={{backgroundImage: `url(${Perlin})`}} className={`absolute w-full h-full z-10 opacity-25 bg-repeat`}></div>
        <div className='w-full px-8 pt-10 relative top-0 flex items-center  text-center flex-col z-20'>
            <h1 className='text-white'>{title}</h1>
            <h3 className='text-white pt-8 text-lg'>{text}</h3>
            <div className='w-full max-w-[1000px] pt-32' id="inputs">
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2'>
                    {/* name input */}
                    <div className='col-span-1 flex flex-col text-left'>
                        <label>
                            Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            {...register('name', {
                                required: { value: true, message: 'Please enter your name' },
                                maxLength: {
                                value: 30,
                                message: 'Please use 30 characters or less'
                                }
                            })}
                            className=''
                            placeholder='Jane Doe'
                        ></input>
                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    {/* email input */}
                    <div className='col-span-1 flex flex-col text-left'>
                        <label>
                            <div className="flex">
                                <div className="flex items-center me-4">
                                    <input 
                                        id="inline-radio" 
                                        type="radio" 
                                        value="email" 
                                        name="inline-radio-group" 
                                        className=" m-0 mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        onChange={handleOptionChange}
                                        checked={emailOrPhone ==='email'}
                                        />
                                    <label  >email</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input 
                                        id="inline-2-radio" 
                                        type="radio" 
                                        value="phone" 
                                        name="inline-radio-group" 
                                        className=" m-0 mr-2 w-4 h-4 text-blue-600  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        onChange={handleOptionChange}
                                        />
                                    <label  >phone #</label>
                                </div>
                            </div>
                        </label>
                        <input
                            type='email'
                            name='name'
                            {...register('email', {
                                required: emailOrPhone === 'email' ? 'Please enter a valid email.' : false,
                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                              })}
                            className={`${emailOrPhone === 'email' ? 'block' : 'hidden'}`}
                            placeholder='janedoe@gmail.com'
                        ></input>
                        {errors.email && emailOrPhone == 'email' && <span className='errorMessage'>Please enter a valid email</span>}
                        {/* phone input */}
                        <input
                            type='tel'
                            name='phone'
                            {...register('phone', {
                                required: emailOrPhone === 'phone' ? 'Please enter your phone number' : false,
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Please enter a valid 10-digit phone number'
                                  }
                              })}
                            className={`${emailOrPhone === 'phone' ? 'block' : 'hidden'}`}
                            placeholder='(555) 123-4567'
                        ></input>
                        {errors.phone && emailOrPhone == 'phone' && <span className='errorMessage'>Please enter a valid phone #</span>}
                    </div>
                    {/* message input */}
                    <div className='col-span-full flex flex-col text-left'>
                        <label>
                            message
                        </label>
                        <textarea
                            type='text'
                            name='name'
                            {...register('message', {
                                required: true
                              })}
                            className='h-64'
                            placeholder='Message'
                        ></textarea>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                    <div className='col-span-full '>
                        <button className=' px-4 py-2 hover:scale-105 text-base md:text-lg tracking-wider h-14 md:h-20 w-40 md:w-60 rounded-rounded-6 bg-Dodger-Blue text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' type='submit'>
                            Submit
                        </button>
                    </div>
                    <div className="col-span-full" id="footer">
                        <Footer />
                    </div>
                </div>
                
            
                
            </form>
            </div>
        </div>
    </div>
    )
}