import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({href, btnText}) => {
  return (
   <button>
          <Link to={href} className='bg-transparent border-2 border-farm-green hover:bg-farm-green/50 rounded-md lg:px-10 lg:py-4 px-5 py-3'>
              {btnText}
          </Link>
   </button>
  )
}

export default Button