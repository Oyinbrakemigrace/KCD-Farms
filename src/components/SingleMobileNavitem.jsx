import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiChevronUp } from "react-icons/bi";

const SingleMobileNavitem = ({ label, href, children, setOpenSideMenu }) => {
    const [openMobileChildren, setOpenMobileChildren] = useState(false);
    const location = useLocation();

    // Check if the current route matches any of the child links
    const isParentActive = children?.some(child => location.pathname === child.href);

    const toggleItem = () => {
        if (children) {
            setOpenMobileChildren(!openMobileChildren);
        } else {
            setOpenSideMenu(false);
        }
    };

    return (
        <div className="px-2 py-3">
            {children ? (
                <button
                    onClick={toggleItem}
                    className={`flex w-full items-center gap-2 text-left transition-all ${isParentActive ? "text-[#4c682e] font-bold" : "text-neutral-400 hover:text-black"
                        }`}
                >
                    <span>{label}</span>
                    <BiChevronUp
                        className={`text-xs transition-all ${openMobileChildren ? "rotate-180" : ""}`}
                    />
                </button>
            ) : (
                <NavLink
                    to={href}
                    onClick={toggleItem}
                    className={({ isActive }) =>
                        `block w-full transition-all ${isActive ? "text-[#4c682e] font-bold" : "text-neutral-400 hover:text-black"
                        }`
                    }
                >
                    {label}
                </NavLink>
            )}
            {openMobileChildren && children && (
                <div className="flex flex-col gap-1 rounded-lg bg-white py-3 transition-all">
                    {children.map((child, index) => (
                        <NavLink
                            key={index}
                            to={child.href}
                            className={({ isActive }) =>
                                `flex items-center py-1 pl-6 pr-8 transition-all ${isActive ? "text-[#4c682e] font-bold" : "text-neutral-400 hover:text-black"
                                }`
                            }
                            onClick={() => setOpenSideMenu(false)}
                        >
                            <span className="whitespace-nowrap pl-3">{child.label}</span>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SingleMobileNavitem;
