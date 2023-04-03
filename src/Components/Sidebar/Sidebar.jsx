import React from "react";
import { Link } from "react-router-dom";
import { RiBracesFill } from "react-icons/ri";
// import { GrCertificate } from "react-icons/gr";
import { BsTrophy } from "react-icons/bs";
import "./sidebar.css";
import Collapsible from "../Collpsible/Collapsible";
import SidebarLogic from "./SidebarLogic";

const Sidebar = () => {
  const { currentLangData } = SidebarLogic();

  return (
    <>
      <div className="sidebar flex flex-col">
        <div className="logo ">
          <h1 className="text-2xl text-center">CODESTAR </h1>
        </div>
        <div className="side-links mt-4">
          <Link to="/">
            <div className="link flex align-middle items-center   text-xl">
              <div className="ruler mr-7"></div>
              <div className="link-icons py-4 mr-6 text-2xl font-extrabold">
                <RiBracesFill />
              </div>
              <div className="link-text py-3">Languages</div>
            </div>
          </Link>
          <Collapsible>
            <div className={"Question-list "}>
              {currentLangData ? (
                Object.keys(currentLangData).map((key) => {
                  return (
                    <Link
                      to={`/Question-list/${currentLangData[key].LanguageName}`}
                    >
                      <div className="link flex align-middle items-center text-xl">
                        <div className="ruler mr-7"></div>
                        <div className="pl-6 link-icons py-2 mr-6 text-2xl font-extrabold">
                          <img
                            src={currentLangData[key].imageUrl}
                            alt="icon"
                            className="w-7 h-7"
                          />
                        </div>
                        <div className="link-text py-2">
                          {currentLangData[key].LanguageName}
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </Collapsible>
          <Link to="/contest">
            <div className="link flex align-middle items-center text-xl">
              <div className="ruler mr-7"></div>
              <div className="link-icons py-4 mr-6 text-2xl font-extrabold">
                <BsTrophy />
              </div>
              <div className="link-text">Contest</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
