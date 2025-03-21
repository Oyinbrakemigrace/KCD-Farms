import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import navItems from '../constants/navitems';
import { BiChevronUp, BiMenu } from 'react-icons/bi';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const location = useLocation();

  return (
    <header className='w-full fixed h-20 z-50 bg-center bg-white/60'>
      <div className='lg:px-8 px-5 mx-auto flex items-center justify-between h-full'>
        <Link to={"/"}>
          <img src="./logoImg.svg" alt="logo-img" width={120} />
        </Link>
        <nav className='hidden lg:flex'>
          {navItems.map((item, index) => {
            const isParentActive = item.children?.some(child => location.pathname === child.href);
            return item.children ? (
              // If the item has children, use a button instead of NavLink
              <div key={index} className="relative group px-5">
                <button className={`flex items-center space-x-2 justify-center 
                  ${isParentActive ? "text-farm-green font-bold" : "text-zinc-900 hover:text-farm-green"}`}>
                  <span>{item.label}</span>
                  <span className="transition-all group-hover:rotate-180">
                    <BiChevronUp size={17} />
                  </span>
                </button>
                <div className="absolute left-0 top-6 hidden flex-col gap-1 rounded-lg bg-farm-green py-2 
                shadow-md transition-all group-hover:flex">
                  {item.children.map((child, index) => (
                    <NavLink
                      key={index}
                      to={child.href}
                      className={({ isActive }) =>
                        `py-1 px-5 hover:text-black ${isActive ? "text-zinc-900 font-bold" : "text-zinc-100"
                        }`
                      }
                    >
                      <span className="whitespace-nowrap pl-3">{child.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={index}
                to={item.href}
                className={({ isActive }) =>
                  `px-5 hover:text-farm-green ${isActive ? "text-farm-green font-bold" : "text-zinc-900"}`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>
        <div className='lg:hidden block'>
          <div onClick={() => setOpenSideMenu(true)}>
            <BiMenu size={40} color='#4c682e' />
          </div>
          <div className={`top-0 right-0 w-full fixed h-full ease-in-out duration-300 
            ${openSideMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
            {openSideMenu && <MobileNavbar setOpenSideMenu={setOpenSideMenu} />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
