import React from 'react'
import Heading from '../Heading'

import ButtonOutline from '../Button'
import { Link } from 'react-router-dom'
import { GiChicken, GiCirclingFish } from 'react-icons/gi'

const Explore = () => {
    return (
        <div>
            <Heading text="Explore Our Farm" />
            <div className='lg:mt-7 mt-5'>
                <p className='text-zinc-900 text-xl leading-loose'>
                    We currently raise chickens and catfish, carefully bred to provide
                    premium-quality food products. As we grow, we look forward to introducing
                    more animals to our farm. Stay tuned for updates on our expansion!
                </p>
            </div>
            <div className='mt-8 flex justify-center lg:space-x-10 space-x-5'>
                <Link to={"/our-chickens"} className='bg-farm-green text-xl flex justify-center items-center space-x-3 hover:scale-95 hover:transition-all duration-300 text-slate-100 rounded-md w-full py-3'>
                    <span>Poultry</span> <GiChicken size={20}/>
                </Link>
                <Link to={"/our-fishes"} className='whitespace-nowrap bg-farm-green hover:scale-95 text-xl flex justify-center items-center hover:transition-all duration-300 space-x-3 text-slate-100 rounded-md w-full'>
                    <span>Catfish Farm</span> <GiCirclingFish />
                </Link>
            </div>
        </div>
    )
}

export default Explore