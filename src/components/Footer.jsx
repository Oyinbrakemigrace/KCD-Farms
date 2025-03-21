import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { IoCallOutline } from 'react-icons/io5'
import { BsSend } from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className='bg-farm-green text-slate-100 px-5 py-10 grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-10 lg:place-items-center'>
            <div className='space-y-2'>
                <img src="./whiteLogo.png" alt="white-logo" className='w-[10rem]' />
                <p className='text-lg'>Naturally Raised, Sustainably Grown!</p>
                <div className='lg:flex hidden space-x-5 items-center text-3xl mt-8'>
                    <FaFacebook />
                    <FaXTwitter />
                    <FaLinkedin />
                    <FaInstagram />
                </div>
            </div>
            <div>
                <h5 className='text-3xl'>Who are we?</h5>
                <div className='flex flex-col gap-4 mt-5 text-lg underline'>
                    <NavLink to="/about-us"><p>About us</p></NavLink>
                    <NavLink to="/our-chickens"><p>Our Chickens</p></NavLink>
                    <NavLink to="/our-fishes"><p>Our Fishes</p></NavLink>
                    <NavLink to="/contact-us"><p>Contact Us</p></NavLink>
                </div>
            </div>
            <div>
                <h5 className='text-3xl'>Contact us</h5>
                <p className='flex items-center space-x-2 text-lg mt-5'>
                <HiOutlineMail />
                <a href="mailto:contact@kcdfarms.info" className='underline'>Contact@kcdfarms.info</a>
                </p>
                <p className='flex items-center space-x-2 text-lg mt-5'>
                    <IoCallOutline />
                    <span>+234 8180033333</span>
                </p>
                <div className='lg:hidden flex space-x-5 items-center text-3xl mt-8'>
                    <FaFacebook />
                    <FaXTwitter />
                    <FaLinkedin />
                    <FaInstagram />
                </div>
                <div className='mt-10'>
                    <Link to="/contact-us" className='hover:scale-90 hover:transition-all duration-300 flex items-center justify-center text-lg space-x-2 bg-transparent border-2 border-slate-100 rounded-md lg:px-10 lg:py-4 px-3 py-3'>
                        <span>Send us a message</span> <BsSend />
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer