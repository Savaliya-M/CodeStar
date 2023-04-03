import React, { useState } from "react";

const AddQuestionLogic = () => {
  const [questionText, setQuestionText] = useState();
  const [Content, setContent] = useState("");

  return { questionText, setQuestionText, setContent, Content };
};

export default AddQuestionLogic;
