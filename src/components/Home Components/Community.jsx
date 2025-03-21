import React from 'react'
import Heading from '../Heading'
import { Link } from 'react-router-dom'

const Community = () => {
    return (
        <div>
            <Heading text="Join Our Community" />
            <div className='lg:mt-7 mt-5 text-xl'>
                <p className='text-zinc-900 text-xl leading-loose'>
                    At KCD Farms, we value our customers and believe in transparency.
                    Whether you are looking for fresh farm produce, sustainable farming
                    insights, or simply want to connect, we are here for you.
                    Stay connected with us to receive farm updates, special offers,
                    and insights into our farming practices. Follow us on social media,
                    subscribe to our newsletter, or visit us in person to experience
                    the KCD Farms difference.
                </p>
                <p className='text-center mt-6'><Link to="/contact-us" className='text-farm-green underline font-bold'>Contact Us</Link> today to place an order or visit our farm!</p>
            </div>
        </div>
    )
}

export default Community