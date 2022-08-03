import React, { useState } from 'react'
import Logo from '../logo.png'
import './Navbar.css'
import { BsList } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";

export default function Navbar({ setFilter }) {
    const [mobileNav, setMobileNav] = useState(false)
    const [state, setState] = useState({
        name: "",
        email: ""
    })

    const changeHandler = (e) => {
        setState({
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setFilter(state)
    }

    const clearHandler = () => {
        setState({
            name: "",
            email: ""
        })
        setFilter(state)
    }


    return (
        <nav id="navbar">
            <img src={Logo} alt="Logo" style={{ width: "65px" }} />
            <form onSubmit={submitHandler}>
                <ul className={mobileNav ? "item expanded" : "item"}>
                    <li>
                        <div className='search-bar'>
                            <div className='search-logo'>
                                <BiSearch size={20} color="#B3BAC5" />
                                <input type="text" value={state.name || ""} name='name' placeholder="Search By Name"
                                    onChange={changeHandler} />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='search-bar'>
                            <div className='search-logo'>
                                <BiSearch size={20} color="#B3BAC5" />
                                <input type="text" value={state.email || ""} name='email' placeholder="Search By Email"
                                    onChange={changeHandler} />
                            </div>
                        </div>
                    </li>
                    <button type='submit' className="button-search">Search</button>
                    <button onClick={clearHandler} className="button-clear">Clear</button>
                </ul >
            </form>
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