import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const AddLanguageLogic = () => {
  const fileRef = useRef();

  const [langData, setLangData] = new useState({
    LanguageName: "",
    imageUrl: "",
    Questions: [],
  });
  const [img, setImg] = new useState();

  const LangDataOnChange = (e) => {
    setLangData({
      ...langData,
      [e.target.name]: e.target.value,
    });
  };

  const fileChange = (e) => {
    let type = e.target.files[0].type;

    if (
      type === "image/jpeg" ||
      type === "image/png" ||
      type === "image/svg+xml"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImg(reader.result);
      };
    } else {
      alert("Please upload a valid image file");
    }
  };

  const fileUploadClick = () => {
    fileRef.current.click();
  };

  const FileUpload = async (file) => {
    const storageRef = ref(storage, `language_Icons/${langData.LanguageName}/`);
    const uploading = uploadBytesResumable(storageRef, file);

    await uploading.then(async () => {
      await getDownloadURL(storageRef).then((url) => {
        setLangData({
          ...langData,
          imageUrl: url,
        });
      });
    });
  };

  const LanguageAddClick = async (e) => {
    e.preventDefault();
    try {
      await FileUpload(fileRef.current.files[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (langData.imageUrl) {
      axios
        .post("http://localhost:3010/api/admin/addLanguage", langData)
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          setLangData({ LanguageName: "", imageUrl: "" });
          setImg(null);
          alert("Language added successfully");
        });
    }
  }, [langData.imageUrl]);

  return {
    langData,
    LangDataOnChange,
    fileRef,
    fileChange,
    fileUploadClick,
    LanguageAddClick,
    img,
  };
};

export default AddLanguageLogic;
