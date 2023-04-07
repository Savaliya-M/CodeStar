import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Page from "../../Components/Pages/Page";
import "./layout.css";

const Layout = ({ toggleTheme }) => {
  return (
    <>
      <div className="layout grid">
        <div className="leftlayout">
          <Sidebar />
        </div>
        <div className="rightlayout  ">
          <div className="navbar ">
            <Navbar toggleTheme={toggleTheme} />
          </div>

          <div className="routes">
            <Page />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
