import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "../Navabar/Navbar";
import Footer from './Footer/footer';


const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
