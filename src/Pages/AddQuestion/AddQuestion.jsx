import React, { useRef, useEffect, useState, useMemo } from "react";
import AddQuestionLogic from "./AddQuestionLogic";
import { Editor } from "@tinymce/tinymce-react";
import "./addQuestion.css";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddQuestion = () => {
  const { questionText, setQuestionText, content, setContent } =
    AddQuestionLogic();
  const editor = useRef(null);
  // const [content, setContent] = useState('');
  // config.uiColor = "#66AB16";

  return (
    <>
      <div className="mainQuestionAdd">
        <div className="flex flex-col path px-28 py-5 leading-7 ">
          <h1>Question {">"} Java</h1>
          <h1 className="text-2xl">Java</h1>
        </div>
        <div className="head-Detail"></div>
        <div className="TextEditor w-2/4" id="text-ditor">
          {/* <CKEditor
            editor={ClassicEditor}
            // data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            // onBlur={(event, editor) => {
            //   console.log("Blur.", editor);
            // }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
            className="bg-black"
          /> */}
          <Editor
            value={content}
            className="text-editor"
            selector="textarea"
            init={{
              setup: function (editor) {
                editor.on("init", () => {
                  // setIsLoadingState(false);
                  document
                    .getElementById("text-ditor")
                    .setAttribute(
                      "style",
                      "border: 2px solid var(--glass-border-color); box-shadow: 0 0 15px var(--box-shadow); height: auto; width: 100%"
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
                  // setIsTextEditorLoading(false);
                });
              },

              height: 600,
              menubar: true,
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media paste wordcount",
                "fullscreen",
                "code",
                "image",
                "advlist",
              ],
              toolbar:
                "undo redo | formatselect | fontsizeselect | bold italic \
                   alignleft aligncenter alignright | \
                   bullist numlist | outdent indent | help | fullscreen | code | image",
            }}
            onEditorChange={(data) => setContent(data)}
          />
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
