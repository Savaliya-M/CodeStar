import React from 'react'
import { MdLogout } from 'react-icons/md';
import { BsMoon } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
import "./navbar.css";

const Navbar = () => {
    return (
        <>
            <div className='navbar flex '>

                <div className='right flex text-2xl items-center text-white space-x-5'>
                    <BsMoon />
                    <div className='flex items-center'>
                        <HiOutlineUser /> Mitul
                    </div>
                    <MdLogout />
                </div>
            </div>
        </>
    )
}

export default Navbar
