import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-[url(./assets/heroImage.jpg)] pt-[7rem] bg-cover bg-center bg-no-repeat h-screen relative'>
      <div className="absolute top-0 h-full w-full bg-[#000]/80" />
      <div className="absolute inset-0 flex flex-col justify-center items-center backdrop-blur-xs">
        <p className='text-white font-extrabold lg:text-7xl text-3xl'>Hello world</p>
        <p className='text-white font-extrabold text-2xl mt-5'>Hello world</p>

      </div>
    </div>
  )
}

export default HomePage
