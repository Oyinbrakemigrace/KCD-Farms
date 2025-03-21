import React from 'react'
import catfish from "../../assets/catFishes.png"
import chicken from "../../assets/chickenImg.jpg"
import Heading from '../Heading'

const Experience = () => {
    return (
        <div>
            <Heading text="Experience Farm Fresh Goodness" />
            <div className='lg:mt-7 mt-5 lg:space-y-20 space-y-5'>
                <div className='flex lg:flex-row flex-col justify-between items-center'>
                    <p className='text-zinc-900 text-xl lg:w-[50%] w-full leading-loose'>
                        At KCD Farms, we believe that good food starts with great care.
                        That is why we are dedicated to raising our animals in a clean,
                        natural, and ethical environment. We are starting with premium-quality
                        chickens and catfish, but we have exciting plans to expand into other
                        livestock soon. Our commitment to sustainability ensures that everything
                        we produce is fresh, healthy, and environmentally friendly.
                    </p>
                    <img src={catfish} alt="catfish-img" className='w-[30rem] rounded-xl lg:mt-0 mt-5' />
                </div>
                <div className='flex lg:flex-row flex-col-reverse justify-between items-center'>
                    <img src={chicken} alt="chicken-img" className='w-[30rem] rounded-xl lg:mt-0 mt-5' />
                    <p className='text-zinc-900 text-xl lg:w-[50%] w-full leading-loose'>
                        With a deep dedication to responsible farming, we prioritize eco-friendly
                        practices, ensuring that our processes are not just good for you but also
                        for the planet. Whether you are looking for organically raised poultry,
                        responsibly farmed fish, or a farm that you can trust,
                        KCD Farms is here for you.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience