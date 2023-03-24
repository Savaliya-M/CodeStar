import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiBracesFill } from "react-icons/ri";
// import { GrCertificate } from "react-icons/gr";
import { BsTrophy } from "react-icons/bs";
import { MdOutlineQuestionAnswer, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

import './sidebar.css'

const Sidebar = () => {
    const [listtoggale, setListtoggale] = new useState(true);

    useEffect(() => {
        console.log(listtoggale);
    }, [listtoggale])

    return (
        <>
            <div className='sidebar flex flex-col'>
                <div className="logo ">
                    <h1 className='text-2xl text-center'>CODESTAR </h1>
                </div>
                <div className='side-links mt-4'>
                    <div className='link flex align-middle items-center   text-xl'>
                        <div className='ruler mr-7'>
                        </div>
                        <div className='link-icons py-4 mr-6 text-2xl font-extrabold'>
                            <RiBracesFill />
                        </div>
                        <div className='link-text py-3'>
                            <Link to="/languages">Languages</Link>
                        </div>
                    </div>
                    <div className='link flex align-middle items-center   text-xl' onClick={() => setListtoggale(!listtoggale)}>
                        <div className='ruler mr-7'>
                        </div>
                        <div className='link-icons py-4 mr-6 text-2xl font-extrabold'>
                            <MdOutlineQuestionAnswer />
                        </div>
                        <div className='link-text flex' >
                            Questions
                            {
                                listtoggale ? <MdOutlineKeyboardArrowUp className='ml-20 font-extrabold text-3xl' /> : <MdOutlineKeyboardArrowDown className='ml-20 font-extrabold text-3xl' />
                            }

                        </div>
                    </div>
                    {listtoggale ?
                        <div className=''>
                            <div className=' link flex align-middle items-center text-xl'>
                                <div className='ruler !pt-9  mr-7'>
                                </div>
                                <div className='pl-6 link-icons py-2 mr-6 text-2xl font-extrabold'>
                                    <RiBracesFill />
                                </div>
                                <div className='link-text py-2'>
                                    <Link to="/languages">Languages</Link>
                                </div>
                            </div>
                            <div className=' link flex align-middle items-center text-xl'>
                                <div className='ruler !pt-9  mr-7'>
                                </div>
                                <div className='pl-6 link-icons py-2 mr-6 text-2xl font-extrabold'>
                                    <RiBracesFill />
                                </div>
                                <div className='link-text py-2'>
                                    <Link to="/languages">Languages</Link>
                                </div>
                            </div>
                            <div className=' link flex align-middle items-center text-xl'>
                                <div className='ruler !pt-9  mr-7'>
                                </div>
                                <div className='pl-6 link-icons py-2 mr-6 text-2xl font-extrabold'>
                                    <RiBracesFill />
                                </div>
                                <div className='link-text py-2'>
                                    <Link to="/languages">Languages</Link>
                                </div>
                            </div>
                            <div className=' link flex align-middle items-center text-xl'>
                                <div className='ruler !pt-9  mr-7'>
                                </div>
                                <div className='pl-6 link-icons py-2 mr-6 text-2xl font-extrabold'>
                                    <RiBracesFill />
                                </div>
                                <div className='link-text py-2'>
                                    <Link to="/languages">Languages</Link>
                                </div>
                            </div>
                        </div> : <></>
                    }
                    <div className='link flex align-middle items-center text-xl'>
                        <div className='ruler mr-7'>
                        </div>
                        <div className='link-icons py-4 mr-6 text-2xl font-extrabold'>
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
