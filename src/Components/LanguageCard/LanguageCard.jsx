import React from "react";
import { FaJava } from "react-icons/fa";
import "./languageCard.css";

const LanguageCard = ({ data }) => {
  return (
    <>
      <div className="card-left flex p-1 items-center ">
        {/* <FaJava className='mx-8 ' /> */}
        <img src={data.imageUrl} alt="icon" className="mx-8 w-7 h-7 icon" />
        <h1>{data.LanguageName}</h1>
      </div>
    </>
  );
};

export default LanguageCard;
