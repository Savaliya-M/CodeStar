import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Page from '../../Components/Page';
import './layout.css';

const Layout = () => {
    return (
        <>
            <div className='layout grid'>
                <div className='leftlayout '>
                    <Sidebar />
                </div>
                <div className='rightlayout  '>

                    <div className='navbar '>
                        <Navbar />
                    </div>

                    <div className='routes'>
                        <Page />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
