import React from 'react'
import { Link } from 'react-router-dom'

const ButtonOutline = ({ href, btnText }) => {
    return (
        <button>
            <Link to={href} className='bg-farm-green hover:bg-farm-green/80 text-slate-100 rounded-md lg:px-10 lg:py-4 px-5 py-3'>
                {btnText}
            </Link>
        </button>
    )
}

export default ButtonOutline