import React from 'react'
import { Link } from 'react-router-dom'
import { RiBracesFill } from "react-icons/ri";
// import { GrCertificate } from "react-icons/gr";
import { BsTrophy } from "react-icons/bs";

import './sidebar.css'
import Collapsible from '../Collpsible/Collapsible';

const Sidebar = () => {



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
                            <Link to="/">Languages</Link>
                        </div>
                    </div>

                    <Collapsible >
                        <div className={'Question-list '}>
                            {/* {Object.keys(objc).map((data) => { */}
                            {/* return ( */}
                            <div className='link flex align-middle items-center text-xl'>
                                <div className='ruler mr-7'>
                                </div>
                                <div className='pl-6 link-icons py-2 mr-6 text-2xl font-extrabold'>
                                    <RiBracesFill />

                                </div>
                                <div className='link-text py-2'>
                                    <Link to="/Question-list/java">Languages</Link>

                                </div>

                            </div>
                            <div className='link flex align-middle items-center text-xl'>
                                <div className='ruler mr-7'>
                                </div>
                                <div className='pl-6 link-icons py-2 mr-6 text-2xl font-extrabold'>
                                    <RiBracesFill />

                                </div>
                                <div className='link-text py-2'>
                                    <Link to="/Question-list/java">Languages</Link>

                                </div>

                            </div>
                            <div className='link flex align-middle items-center text-xl'>
                                <div className='ruler mr-7'>
                                </div>
                                <div className='pl-6 link-icons py-2 mr-6 text-2xl font-extrabold'>
                                    <RiBracesFill />

                                </div>
                                <div className='link-text py-2'>
                                    <Link to="/Question-list/java">Languages</Link>

                                </div>

                            </div>


                            {/* )
                            })
                            } */}
                        </div>
                    </Collapsible>


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
