import React from 'react'
import { FaJava } from "react-icons/fa";
import './languageCard.css';


const LanguageCard = () => {
  return (
    <>
      <div className='card-left flex p-1 items-center '>
        <FaJava className='mx-8 ' />
        <h1>Java</h1>
      </div>
    </>
  )
}

export default LanguageCard
