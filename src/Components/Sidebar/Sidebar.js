import React from 'react'
import { Link } from 'react-router-dom'
import { RiBracesFill } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
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
                <div className='links'>
                    <div>
                        <div className='ruler'>
                        </div>
                        <div className='link-icons'>
                            <RiBracesFill />
                        </div>
                        <div className='link-text'>
                            <Link to="/">Home</Link>
                        </div>
                    </div>
                    <div>
                        <div className='link-icons'>
                            <MdOutlineQuestionAnswer />
                        </div>
                        <div className='link-text'>
                            Questions
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sidebar
