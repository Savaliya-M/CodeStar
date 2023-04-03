import React, { useRef, useEffect, useState } from "react";
import AddQuestionLogic from "./AddQuestionLogic";
import { Editor } from "@tinymce/tinymce-react";
import "./addQuestion.css";

const AddQuestion = () => {
  const { questionText, setQuestionText, content, setContent } =
    AddQuestionLogic();
  const [isTextEditorLoading, setIsTextEditorLoading] = useState(true);
  useEffect(() => {
    console.log(content);
  }, [content]);
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <div className="mainQuestionAdd">
        <div className="flex flex-col path px-28 py-5 leading-7 ">
          <h1>Question {">"} Java</h1>
          <h1 className="text-2xl">Java</h1>
        </div>
        <div className="head-Detail"></div>
        <div className="TextEditor" id="text-ditor">
          <Editor
            onEditorChange={(text) => setContent(text)}
            // selector="textarea"
            className="textarea"
          />
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
