import React from "react";
import { Routes, Route } from "react-router-dom";
import AddLanguages from "../../Pages/Languages/AddLanguages";
import QuestionList from "../../Pages/Question_List/QuestionList";
import "./page.css";
import AddQuestion from "../../Pages/AddQuestion/AddQuestion";

const Page = () => {
  return (
    <div className="page ">
      <Routes>
        <Route exact path="/" element={<AddLanguages />} />
        <Route exact path="/Question-list/:id" element={<QuestionList />} />
        <Route exact path="/AddQuestion" element={<AddQuestion />} />
      </Routes>
    </div>
  );
};

export default Page;
