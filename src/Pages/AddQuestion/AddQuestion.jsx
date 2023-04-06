import React from "react";
import AddQuestionLogic from "./AddQuestionLogic";
import { Editor } from "@tinymce/tinymce-react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "./addQuestion.css";

const AddQuestion = () => {
  const { questionText, setQuestionText, code, setCode } = AddQuestionLogic();

  return (
    <>
      <div className="mainQuestionAdd ">
        <div className="flex flex-col path px-28 py-5 leading-7 ">
          <h1>Question {">"} Java</h1>
          <h1 className="text-2xl">Java</h1>
        </div>
        <div className="QuestionAddPage px-40">
          <div className="head-Detail"></div>
          <div className="TextEditor " id="text-editor">
            {/* <Editor
              value={questionText}
              className="text-editor"
              selector="textarea"
              init={{
                setup: function (editor) {
                  editor.on("init", () => {
                    document
                      .getElementById("text-editor")
                      .setAttribute(
                        "style",
                        "border: 2px solid var(--glass-border-color); box-shadow: 0 0 15px var(--box-shadow); height: auto; width: 100%"
                      );

                    const head = document.getElementsByClassName(
                      "tox-edit-area__iframe"
                    )[0].contentWindow.document.head;
                    console.log(head);
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
                // toolbar_mode: "sliding",
                height: 500,
                // toolbar_mode: "floating",

                // menubar: true,
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
                menubar: "file edit view insert format tools table help",
                toolbar_mode: "floating",
                autoresize_bottom_margin: 50,
                toolbar1:
                  "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks |alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | fullscreen | ltr rtl ",
                // "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks |alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl ",
                // toolbar2:
                // " ",
              }}
              onEditorChange={(data) => setQuestionText(data)}
            /> */}
            <Editor
              value={questionText}
              className="text-editor"
              // selector="textarea"
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
              onEditorChange={(data) => setQuestionText(data)}
            />
          </div>
          <div className="CodeEditor">
            <AceEditor
              mode="java"
              theme="terminal"
              onChange={(data) => setCode(data)}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
              }}
            />
            ,
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
