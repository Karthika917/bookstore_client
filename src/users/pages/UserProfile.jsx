import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'

import { IoClose } from "react-icons/io5";
import { FaPen } from "react-icons/fa";

function UserProfile() {

   const [sellStatus,setSellStatus] = useState(true)
   const [bookStatus,setBookStatus] = useState(false)
   const [purchaseStatus,setPurchaseStatus] = useState(false)
   const[modalStatus,setModalStatus]=useState(false)

  return (
    <>
    <Header/>
      <div className='min-h-[60vh]'>
        <div className='w-full bg-cyan-950 h-[40vh] relative'>
          <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" className='rounded-full absolute left-5 -bottom-25 w-[20%]' 
          />
        </div>
        <div className='mt-30 px-5 md:px-20'>
          <div className='flex justify-between'>
            <h1 className="text-2xl">Username</h1>
            <button className='text-blue-600 border border-r-blue-500 rounded-sm px-3 py-2 flex justify-center hover:bg-blue-500/80 hover:text-white'
            onClick={()=>{setModalStatus(true)}}>
              Edit
            </button>
          </div>
          <p className='text-justify my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi praesentium voluptatum
             harum doloremque autem nam exercitationem architecto voluptates, alias placeat explicabo iste accusamus fugit dignissimos minus. Beatae eveniet aspernatur similique!</p>
        </div>

        <div className='flex justify-center items-center text-sm md:text-base my-10'>
          <div className={sellStatus?'p-2 border-gray-600 border-r border-t text-blue-600 border-l rounded-t-sm':'p-2 border-b border-gray-600 cursor-pointer'}
            onClick={()=>{setSellStatus(true);setBookStatus(false);setPurchaseStatus(false)}}>
              Sell book
          </div>
          <div className={bookStatus?'p-2 border-gray-600 border-r border-t border-l rounded-t-sm text-blue-600':'p-2 border-b  border-gray-600 cursor-pointer'}
            onClick={()=>{setSellStatus(false);setBookStatus(true);setPurchaseStatus(false)}}>
              Book Status
          </div>
          
          <div className={purchaseStatus?'p-2 border-gray-600 border-t border-l border-r rounded-t-sm text-blue-600':'p-2 border-b border-gray-600 cursor-pointer'}
            onClick={()=>{setSellStatus(false);setBookStatus(false);setPurchaseStatus(true)}}>
              Purchase History
          </div>
        </div>
        {
          sellStatus &&
          <div className='px-5 md:px-50 mb-10'>
            <div className='bg-gray-200 p-3'>
              <h1 className='text-center my text-xl mt-5'>Book Details</h1>
            <div className='md:grid grid-cols-2 gap-3 mt-5'>
             <div>
              <input type="text" className='p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full' placeholder='Title' />
              <input type="text" className='p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full' placeholder='Author' />
              <input type="text" className='p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full' placeholder='No. of Pages' />
              <input type="text" className='p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full' placeholder='Image url' />
              <input type="text" className='p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full' placeholder='Price' />
              <input type="text" className='p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full' placeholder='Discount Price' />
              <textarea name="" id="" className='p-3 w-full bg-white placeholder-gray-400 rounded-sm mb-3' rows={4} placeholder='Abstract'></textarea>
             </div>
             <div>
                <input type="text" className='p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full' placeholder='Publisher' />
                <input type="text" className='p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full' placeholder='Language' />
                <input type="text" className='p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full' placeholder='ISBN' />
                <input type="text" className='p-3 bg-white placeholder-gray-400 rounded-sm mb-3 w-full' placeholder='Category' />
              <label htmlFor="imginp" className='flex justify-center'>
                <input type="file" className='hidden' id='imginp' />
                <img src="https://cdn.pixabay.com/photo/2017/02/07/02/16/cloud-2044823_1280.png" alt="fileinput" className='w-[60%] cursor-pointer' />
              </label>
             </div>
            </div>
            <div className='p-2 flex justify-end gap-3'>
            <button className='p-3 border bg-red-700/80 border-red-700 text-white rounded-sm hover:bg-white hover:text-red-700'>
              Reset
            </button>
            <button className='p-3 border bg-green-700/90 border-green-700 text-white rounded-sm hover:bg-white hover:text-green-700'>
              Submit
            </button>
            </div>
          </div>
        </div>
        }

        {
          bookStatus &&
          <div className='px-5 md:px-50 mb-10 shadow-lg border border-gray-100 p-4 flex flex-col justify-center items-center'>
            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" className='' width={'300px'} alt="nobooks" />
            <h1 className='text-2xl text-red-500'>No Books Added Yet</h1>
          </div>
        }

        {
          purchaseStatus &&
          <div className='px-5 md:px-50 mb-10 shadow-lg border border-gray-100 p-4 flex flex-col justify-center items-center'>
            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" className='' width={'300px'} alt="nobooks" />
            <h1 className='text-2xl text-red-500'>No Books Purchased Yet</h1>
          </div>
        }

         { modalStatus && 
            <div className="relative z-10" >
              <div className="bg-gray-500/75 fixed inset-0">
                <div className="flex justify-center items-center min-h-screen">
                  <div style={{width: "500px" ,height:'100vh'}} className="bg-white rounded-2xl flex flex-col justify-between">
                    <div className="bg-black text-white flex justify-between items-center p-3 rounded-t-2xl">
                      <h1 className="text-2xl font-bold">Edit Profile</h1>
                      <button onClick={()=>setModalStatus(false)}>
                        <IoClose className='text-2xl'/>
                      </button>
                    </div>

                    <div className="p-5">
                      <label htmlFor="profile_pic" className='flex justify-center relative cursor-pointer'>
                      <input type="file" className='hidden' id='profile_pic' />
                      <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="profile-image" width={'250px'}/>
                      <button className='bg-yellow-400 p-3 text-white rounded-sm absolute bottom-5 right-35 cursor-pointer'>
                        <FaPen />
                      </button>
                      </label>

                      <div className='py-5 flex flex-col gap-2 p-5'>
                        <input type="text" placeholder="UserName" className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"/>
                        <input type="text" placeholder="Password" className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"/>
                        <input type="text" placeholder="Confirm Password" className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"/>
                        <textarea name="" placeholder="Bio" className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full " id=""></textarea>
                      </div>
                      
                    </div>
                    <div className="bg-gray p-3 flex justify-end gap-2 rounded-b-2xl">
                      <button className="p-2 border rounded-sm bg-red-500 text-white hover:bg-white hover:border-red-600 hover:text-red-500">Reset</button>
                      <button className="p-2 border rounded-sm bg-green-700 text-white hover:bg-white hover:border-green-600 hover:text-green-500">Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
       
      </div>
    <Footer/>
    </>
  )
}

export default UserProfile