import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Page from '../../Components/Page';
import './layout.css';

const Layout = () => {
    return (
        <>
            <div className='layout '>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='routes'>
                    <Page />
                </div>
            </div>
        </>
    )
}

export default Layout
