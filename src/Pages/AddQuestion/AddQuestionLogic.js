import { useState } from "react";

const AddQuestionLogic = () => {
  const [questionText, setQuestionText] = useState("");
  const [code, setCode] = useState("");

  return { questionText, setQuestionText, code, setCode };
};

export default AddQuestionLogic;
