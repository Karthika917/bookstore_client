import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaBook } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

function AdminSidebar() {
   
    const location = useLocation()
    const [collapse,setCollapse] = useState(false)
    
  return (
    <>
     <div className='bg-blue-300 min-h-full flex flex-col items-center justify-center py-10'>
      <img src='/profile.png' alt="adminpp" className='w-[60%] h-[60%]' />
      <h1 className='my-3 font-semibold flex items-center gap-4'>
        Admin
        <button onClick={()=>{setCollapse(!collapse)}}>
          <GiHamburgerMenu />
        </button>
        </h1>
     {
        !collapse &&
        <div>
      <div className='flex gap-2 items-center my-3'>
       <input type="radio" name='sidebar' id='home' checked={location.pathname==='/admin-dashboard'} readOnly />
       <Link to={'/admin-dashboard'}>
       <label htmlFor="home" className='flex gap-2 items-center'>
        <FaHome />
         Home
       </label>
       </Link>
     </div>
       <div className='flex gap-2 items-center my-3'>
       <input type="radio" name='sidebar' id='book' checked={location.pathname==='/admin-books'} readOnly />{''}
       <Link to={'/admin-books'}>
       <label htmlFor="book" className='flex gap-2 items-center'>
        <FaBook />
         Books
       </label>
       </Link>
     </div>
       <div className='flex gap-2 items-center my-3'>
       <input type="radio" name='sidebar' id='career' checked={location.pathname==='/admin-career'} readOnly />{''}
       <Link to={'/admin-career'}>
       <label htmlFor="career" className='flex gap-2 items-center'>
        <FaShoppingBag />
         Career
       </label>
       </Link>
     </div>
     <div className='flex gap-2 items-center my-3'>
       <input type="radio" name='sidebar' id='settings' checked={location.pathname==='/admin-settings'} readOnly />{''}
       <Link to={'/admin-settings'}>
       <label htmlFor="settings" className='flex gap-2 items-center'>
        <IoIosSettings />
         Settings
       </label>
       </Link>
     </div>
     </div>
     }
    
     </div>
    </>
  )
}

export default AdminSidebar
