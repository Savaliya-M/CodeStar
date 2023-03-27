import React from 'react'
import { HiPlus } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import './questionList.css'


const QuestionList = () => {
  return (
    <>
      <div className='mainQuestionList'>
        <div className='flex flex-col path px-28 py-5 leading-7 '>
          <h1>Question {'>'} Java</h1>
          <h1 className='text-2xl'>Java</h1>
        </div>
        <div className='px-40'>
          <div className='flex justify-end py-6'>
            <button className='btn-question text-black flex items-center text-xl px-4 py-2 rounded-md '> ADD QUESTION <HiPlus className='ml-2' /> </button>
          </div>

          <div className='pt-6'>
            <div className='Question flex p-7  leading-10'>
              <div className='Question-Detail pl-5'>
                <h1 className='text-2xl'>medium</h1>
                <p>Medium, None, Max score: 100</p>
              </div>
              <div className='Question-Icon text-3xl'>
                <MdDelete className='btn-delete mb-2' />
                <RiPencilFill className='btn-edit' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionList
