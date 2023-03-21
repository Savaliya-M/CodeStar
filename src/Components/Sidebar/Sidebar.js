import React from 'react'
import { Link } from 'react-router-dom'
import { RiBracesFill } from "react-icons/ri";
// import { GrCertificate } from "react-icons/gr";
import { BsTrophy } from "react-icons/bs";
import { MdOutlineQuestionAnswer, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

import './sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className='sidebar flex flex-col'>
                <div className="logo ">
                    <h1 className='text-2xl text-center'>CODESTAR </h1>
                </div>
                <div className='side-links mt-4'>
                    <div className='link flex align-middle items-center   text-xl'>
                        <div className='ruler    pt-11 mr-6'>
                        </div>
                        <div className='link-icons py-3 mr-6 text-2xl font-extrabold'>
                            <RiBracesFill />
                        </div>
                        <div className='link-text py-3'>
                            <Link to="/languages">Languages</Link>
                        </div>
                    </div>
                    <div className='link flex align-middle items-center   text-xl'>
                        <div className='ruler pt-11 mr-6'>
                        </div>
                        <div className='link-icons py-3 mr-6 text-2xl font-extrabold'>
                            <MdOutlineQuestionAnswer />
                        </div>
                        <div className='link-text flex'>
                            Questions
                            <MdOutlineKeyboardArrowUp className='ml-20 font-extrabold text-3xl' />
                        </div>
                    </div>
                    <div className='link flex align-middle items-center   text-xl'>
                        <div className='ruler pt-11 mr-6'>
                        </div>
                        <div className='link-icons py-3 mr-6 text-2xl font-extrabold'>
                            <BsTrophy />
                        </div>
                        <div className='link-text'>
                            <Link to="/contest">Contest</Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Sidebar
