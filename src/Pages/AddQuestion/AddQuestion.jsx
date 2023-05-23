import React from "react";
import AddQuestionLogic from "./AddQuestionLogic";
import { Editor } from "@tinymce/tinymce-react";
import AceEditor from "react-ace";
import { BsFillPlusSquareFill } from "react-icons/bs";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/ext-language_tools";
import "./addQuestion.css";

const AddQuestion = () => {
  const {
    questionText,
    setQuestionText,
    code,
    setCode,
    questionData,
    setQuestionData,
  } = AddQuestionLogic();

  const addQuestion = (e) => {
    e.preventDefault();
    setQuestionData(...questionData, { [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mainQuestionAdd ">
        <div className="flex flex-col path px-28 py-5 leading-7 ">
          <h1>Question {">"} Java</h1>
          <h1 className="text-2xl">Java</h1>
        </div>
        <div className="QuestionAddPage px-40">
          <div className="head-Detail">
            <div>
              <input
                type="text"
                className="qhead my-5 mr-8 w-8/12 text-2xl py-2 px-3"
                placeholder="Question Heading"
                name="questionHead"
                onChange={addQuestion}
              />
              <select
                className="DifficultyLevel my-5 w-52 text-2xl py-2 px-3"
                name="level"
                id="DifficultyLevel"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                className="RequireSkills my-5 mr-8 w-8/12 text-2xl py-2 px-3"
                placeholder="Require Skills"
                name="requiredSkill"
                onChange={addQuestion}
              />
              <input
                type="number"
                className="my-5 text-2xl w-52 py-2 px-3"
                name="maxScore"
                id="maxScore"
                defaultValue={0}
                onChange={addQuestion}
              />
            </div>
          </div>
          <div className="TextEditor " id="text-editor">
            <Editor
              value={questionText}
              className="text-editor"
              init={{
                selector: "textarea#basic-example",
                setup: function (editor) {
                  editor.on("init", () => {
                    document
                      .getElementById("text-editor")
                      .setAttribute(
                        "style",
                        "border: 2px solid var(--glass-border-color); box-shadow: 0 0 15px var(--box-shadow); height: auto; width: 100%; position: static;z-index: -1;"
                      );

                    const head = document.getElementsByClassName(
                      "tox-edit-area__iframe"
                    )[0].contentWindow.document.head;
                    head.insertAdjacentHTML(
                      "beforeend",
                      `<style>::-webkit-scrollbar {
    
                          width: 7.5px;
                          background-color: #1e1e1e;
                          border-radius: 10px;
                        }
    
                        ::-webkit-scrollbar-thumb {
                          background-color: rgb(99, 99, 99);
                          border-radius: 10px;
                        }</style>`
                    );

                    document
                      .getElementsByClassName("tox-edit-area__iframe")[0]
                      .contentWindow.document.body.setAttribute(
                        "style",
                        "color: white !important;"
                      );
                  });
                },
                height: 500,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | fontsize | " +
                  "bold italic alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
              }}
              onEditorChange={(data) =>
                setQuestionData(...questionData, { questionDesc: data })
              }
            />
          </div>
          <div className="CodeEditor">
            <AceEditor
              mode="java"
              theme="vibrant_ink"
              width="100%"
              name="defailt-code-editor"
              editorProps={{ $blockScrolling: true }}
              className="code_editor_textarea"
              value={code}
              onChange={(code) =>
                setQuestionData(...questionData, { questionCode: code })
              }
              setOptions={{
                fontSize: 18,
                highlightActiveLine: false,
                selectionStyle: "text",
                highlightSelectedWord: false,
                highlightGutterLine: false,
                showGutter: true,
              }}
            />
          </div>

          <div className="testCases mt-16 p-5">
            <span className="headmain ">Test Cases</span>

            <div className="Cases flex flex-col p-5">
              <div className="flex flex-row">
                <span>Sample test cases : 0</span>
                <span className="ml-auto">
                  <BsFillPlusSquareFill />
                </span>
              </div>

              <input
                type="text"
                className="my-5 text-2xl py-2 px-3"
                name="Input"
                id="input"
                placeholder="Input..."
                onChange={addQuestion}
              />
              <input
                type="text"
                className="text-2xl py-2 px-3"
                name="Output"
                id="output"
                placeholder="Output..."
                onChange={addQuestion}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
