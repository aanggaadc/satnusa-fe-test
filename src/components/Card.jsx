import React from 'react'
import { FaUserCircle, FaPhoneAlt, FaBuilding } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import './Card.css'

export default function Card({ name, email, address, phone, website, company }) {
    return (
        <div className='card-container'>
            <div className='top'>
                <FaUserCircle size={50} />
                <h1>{name}</h1>
            </div>


            <div className='bottom'>
                <div className='email'>
                    <MdEmail size={20} />
                    <h1>{email}</h1>
                </div>

                <div className='address'>
                    <MdLocationOn size={20} />
                    <h1>{address}</h1>
                </div>

                <div className='phone'>
                    <FaPhoneAlt size={20} />
                    <h1>{phone}</h1>
                </div>

                <div className='website'>
                    <AiOutlineGlobal size={20} />
                    <h1>{website}</h1>
                </div>

                <div className='company'>
                    <FaBuilding size={20} />
                    <h1>{company}</h1>
                </div>
            </div>
        </div>
    )
}