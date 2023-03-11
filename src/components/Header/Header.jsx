import React, { useState } from 'react';
import './Header.css'
import profile from '../../assets/img/ico/profile.png'

const Header = () => {

    const [burgerIconClasses, setBurgerIconClasses] = useState("burger-icon")
    const [sidebarBurgerClasses, setSidebarBurgerClasses] = useState("sidebar burger-sidebar")
    const [sidebarProfileClasses, setSidebarProfileClasses] = useState("sidebar profile-sidebar")

    const toggleBurgerSidebar = () => {
        if (sidebarBurgerClasses === "sidebar burger-sidebar") {
            setSidebarBurgerClasses("sidebar burger-sidebar burger-sidebar--active")
            setBurgerIconClasses("burger-icon burger-icon--active")
        } else {
            setSidebarBurgerClasses("sidebar burger-sidebar")
            setBurgerIconClasses("burger-icon")
        }
    };

    const toggleProfileSidebar = () => {
        if (sidebarProfileClasses === "sidebar profile-sidebar") {
            setSidebarProfileClasses("sidebar profile-sidebar profile-sidebar--active")
        } else {
            setSidebarProfileClasses("sidebar profile-sidebar")
        }
    };


    return (
        <>
            <header className="header">
                <div className="container header__body">

                    <div className={burgerIconClasses} onClick={toggleBurgerSidebar}>
                        <span className="top"></span>
                        <span className="middle"></span>
                        <span className="bottom"></span>
                    </div>

                    <span></span>

                    <img src={profile} alt="" className="header__profile-icon" onClick={toggleProfileSidebar} />

                </div>
            </header>


            <div className={sidebarBurgerClasses}>
                <a href="#" className="sidebar-item">Registration</a>
                <a href="#" className="sidebar-item">Authorization</a>
                <a href="#" className="sidebar-item">Log out</a>
            </div>

            <div className={sidebarProfileClasses}>
                <a href="#" className="sidebar-item">Log out</a>
            </div>
        </>
    );
};

export default Header;