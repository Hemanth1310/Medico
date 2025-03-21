import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo}/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'> A comprehensive healthcare app designed to streamline your health management. 
                    Easily schedule appointments and connect with your healthcare providers.
                    Experience a more convenient and proactive approach to your well-being.</p>

            </div>
            {/* middle section*/}
            <div>
                <p className='test-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
            {/* right section */}
            <div>
                <p className='test-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>000-0000-0000</li>
                    <li>abc@priscripto</li>
                </ul>

            </div>
        </div>
          {/* Copywrite text */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>all rights recieved</p>
        </div>
    </div>
  )
}

export default Footer