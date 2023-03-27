import React, { useRef, useState } from 'react'
import './collapsible.css'
import { MdOutlineQuestionAnswer, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";


const Collapsible = ({ children }) => {
    const parentRef = useRef();
    const [listtoggale, setListtoggale] = new useState();


    return (
        <>

            <div className='link flex align-middle items-center   text-xl' onClick={() => setListtoggale(!listtoggale)}>
                <div className='ruler mr-7'>
                </div>
                <div className='link-icons py-4 mr-6 text-2xl font-extrabold'>
                    <MdOutlineQuestionAnswer />
                </div>
                <div className='link-text flex'>
                    Questions
                    {listtoggale ? <MdOutlineKeyboardArrowUp className='ml-20 font-extrabold text-3xl' /> : <MdOutlineKeyboardArrowDown className='ml-20 font-extrabold text-3xl' />}

                </div>
            </div><div ref={parentRef} className='content-parent' style={listtoggale ? { height: parentRef.current ? parentRef.current.scrollHeight + "px" : '0px' } : { height: "0px" }}>

                <div className='content'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Collapsible
