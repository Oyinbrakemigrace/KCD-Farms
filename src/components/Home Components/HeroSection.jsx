import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import ButtonOutline from '../ButtonOutline'

const HeroSection = () => {
    return (
        <div className='bg-[url(./assets/heroImage.jpg)] pt-[7rem] bg-cover bg-center bg-no-repeat h-screen relative'>
            <div className="absolute top-0 h-full w-full bg-[#000]/80" />
            <div className="absolute lg:p-0 text-slate-100 inset-0 flex flex-col justify-center lg:items-center backdrop-blur-xs my-auto">
                <h2 className='lg:text-7xl text-6xl text-center leading-tight text-slate-100 mt-20 lg:font-extrabold font-bold'>Welcome to <span className='text-farm-green'>KCD</span> Farms!</h2>
                <h5 className='lg:text-2xl text-xl text-center italic mt-4'>Where freshness meets quality...</h5>
                <div className='mt-20 space-x-4 flex justify-center text-xl'>
                    <ButtonOutline href={"/about-us"} btnText="Learn More"/>
                    <Button href={"/contact-us"} btnText="Contact Us"/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection