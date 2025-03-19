import React from 'react'
import SingleMobileNavitem from './SingleMobileNavitem'
import { BiX } from 'react-icons/bi'
import navItems from '../constants/navitems'

const MobileNavbar = ({ setOpenSideMenu }) => {
    return (
        <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 lg:hidden">
            <div className=" h-full w-[65%] bg-white px-4 py-4">
                <div onClick={() => setOpenSideMenu(false)} className="flex justify-end text-zinc-900">
                    <BiX size={40} color='#4c682e'/>
                </div>
                <div className=" flex flex-col text-base gap-5 transition-all">
                    {navItems.map((item, index) => (
                        <SingleMobileNavitem
                            key={index}
                            label={item.label}
                            href={item.href}
                            children={item.children}
                            setOpenSideMenu={setOpenSideMenu}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar