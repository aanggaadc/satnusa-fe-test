import React, { useState } from 'react'
import Logo from '../logo.png'
import './Navbar.css'
import { BsList } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
    const [mobileNav, setMobileNav] = useState(false)

    return (
        <nav id="navbar">
            <img src={Logo} alt="Logo" style={{ width: "65px" }} />
            <ul className={mobileNav ? "item expanded" : "item"}>
                <li>
                    <div className='search-bar'>
                        <div className='search-logo'>
                            <BiSearch size={20} color="#B3BAC5" />
                            <input type="text" placeholder="Search By Name" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className='search-bar'>
                        <div className='search-logo'>
                            <BiSearch size={20} color="#B3BAC5" />
                            <input type="text" placeholder="Search By Email" />
                        </div>
                    </div>
                </li>
                <button className="button-search">Search</button>

            </ul >
            <div className="menu-icon">
                {mobileNav ?
                    <VscChromeClose color="#3A4C66" size={40} onClick={() => {
                        setMobileNav(!mobileNav)
                    }} /> :
                    <BsList color="#3A4C66" size={40} onClick={() => {
                        setMobileNav(!mobileNav)
                    }} />
                }
            </div>
        </nav >
    )
}