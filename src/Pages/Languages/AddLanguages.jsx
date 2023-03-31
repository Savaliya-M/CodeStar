import React from "react";
import "./addLanguages.css";
import { AiOutlinePlusCircle, AiOutlineCloudUpload } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import LanguageCard from "../../Components/LanguageCard/LanguageCard";
import AddLanguageLogic from "./AddLanguageLogic";

const AddLanguages = () => {
  const {
    langData,
    LangDataOnChange,
    fileRef,
    fileChange,
    fileUploadClick,
    LanguageAddClick,
    img,
  } = AddLanguageLogic();
  return (
    <>
      <div className="mainAddLang">
        <div className="flex flex-col path px-28 py-5 leading-7 ">
          <h1>Add Languages</h1>
          <h1 className="text-2xl">Add Languages</h1>
        </div>
        <div className="add-lang-section px-48 pt-10">
          <div className="input">
            <div className="flex w-full">
              <input
                className="w-4/5 mr-1 text-2xl py-2 px-3 border-2"
                placeholder="New Language"
                type="text"
                name="LanguageName"
                value={langData.LanguageName}
                onChange={LangDataOnChange}
              />
              <button
                className="btn-add text-2xl w-1/5 flex justify-center items-center text-center "
                onClick={LanguageAddClick}
              >
                ADD
                <AiOutlinePlusCircle className="ml-2" />{" "}
              </button>
            </div>
            <div
              className="select-file-container mt-6 py-10 flex flex-col items-center leading-10 cursor-pointer text-xl"
              onClick={fileUploadClick}
            >
              {img ? (
                <img src={img} className=" !h-full" alt="Icone" />
              ) : (
                <>
                  <AiOutlineCloudUpload className="text-6xl" />
                  <p>Select language icone file</p>
                </>
              )}
              <input
                ref={fileRef}
                type="file"
                onChange={fileChange}
                name="icon"
                className="hidden"
              />
            </div>
          </div>
          <div className="language-cards mt-10 grid grid-cols-2">
            <div className="card p-3 flex text-2xl cursor-pointer">
              <LanguageCard />
              <button className="flex delete items-center justify-center">
                <MdOutlineDelete />
              </button>
            </div>
            <div className="card p-3 flex text-2xl cursor-pointer">
              <LanguageCard />
              <button className="flex delete items-center justify-center">
                <MdOutlineDelete />
              </button>
            </div>
            <div className="card p-3 flex text-2xl cursor-pointer">
              <LanguageCard />
              <button className="flex delete items-center justify-center">
                <MdOutlineDelete />
              </button>
            </div>
            <div className="card p-3 flex text-2xl cursor-pointer">
              <LanguageCard />
              <button className="flex delete items-center justify-center">
                <MdOutlineDelete />
              </button>
            </div>
            <div className="card p-3 flex text-2xl cursor-pointer">
              <LanguageCard />
              <button className="flex delete items-center justify-center">
                <MdOutlineDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLanguages;
