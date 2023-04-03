import React,{useEffect, useState} from "react"
import axios from "axios";

const SidebarLogic = () => {
    const [currentLangData, setCurrentLangData] = useState();

  useEffect(() => {
    const apiCall =async () => {
        await axios
          .get("http://localhost:3010/api/admin/getLanguages")
          .then((res) => {
            setCurrentLangData(res.data.languages);
          });}
          apiCall();
  }, [])

  return {currentLangData};
  
}

export default SidebarLogic