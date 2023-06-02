import { useEffect, useState } from "react";

const AddQuestionLogic = () => {
  const [questionText, setQuestionText] = useState("");
  const [code, setCode] = useState("");
  let [questionData, setQuestionData] = useState({
    questionDesc: "",
    questionCode: "",
    questionHead: "",
    level: "",
    requiredSkill: "",
    maxScore: "",
    TestCases: [{ testCaseId: "", Input: "", Output: "" }],
  });

  const [testCase, setTestCase] = useState({
    testCaseId: "",
    Input: "",
    Output: "",
  });

  useEffect(() => {
    console.log(questionData);
  }, [code, questionText]);

  return {
    questionText,
    setQuestionText,
    code,
    setCode,
    questionData,
    setQuestionData,
    testCase,
    setTestCase,
  };
};

export default AddQuestionLogic;
