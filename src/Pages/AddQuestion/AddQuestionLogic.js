import { useEffect, useState } from "react";

const AddQuestionLogic = () => {
  const [questionText, setQuestionText] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    console.log(code);
  }, [code]);

  return { questionText, setQuestionText, code, setCode };
};

export default AddQuestionLogic;
