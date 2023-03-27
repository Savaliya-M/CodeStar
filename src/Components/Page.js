import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddLanguages from '../Pages/Languages/AddLanguages'
import QuestionList from '../Pages/Question_List/QuestionList'
import './page.css'

const Page = () => {
    return (
        <div className='page '>
            <Routes>
                <Route exact path='/' element={<AddLanguages />} />
                <Route exact path='/Question-list/java' element={<QuestionList />} />
            </Routes>
        </div>
    )
}

export default Page
