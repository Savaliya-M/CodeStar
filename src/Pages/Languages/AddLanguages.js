import React from 'react'
import './addLanguages.css';
import { AiOutlinePlusCircle, AiOutlineCloudUpload } from "react-icons/ai";


const AddLanguages = () => {
    return (
        <>
            <div className='mainAddLang'>
                <div className='flex flex-col path px-28 py-5 leading-7 '>
                    <h1>Add Languages</h1>
                    <h1 className='text-2xl'>Add Languages</h1>
                </div>
                <div className='add-lang-section'>
                    <div className='input'>
                        <div>
                            <input type="text" name="language" />
                            <button >Add<AiOutlinePlusCircle /> </button>
                        </div>
                        <div>
                            <input type="file" name="icon" ></input>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddLanguages
