import React, { useState } from 'react'

import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
function BookList() {

  const[bookStatus,setBookStatus]=useState(true)
  const[userStatus,setUserStatus]=useState(false)
  return (
    <>
      <AdminHeader/>
        <div className='min-h-[60vh] grid grid-cols-1 md:grid-cols-4'>
          <div className='md:col-span-1'>
            <AdminSidebar/>
          </div>
          <div className='md:col-span-3 px-2 md:px-5'>
            <h2 className='text-center text-2xl my-5'>Resource</h2>
            <div className='flex justify-center items-center text-sm md:text-base'>
              <div onClick={() =>{ setBookStatus(true); setUserStatus(false);}}
                className={bookStatus? "p-3 border-l border-r border-t rounded-t-sm  border-gray-600  text-blue-500":
                  "p-3 border-b border-gray-600 cursor-pointer"}>
                    All Books
              </div>
              <div onClick={() => {setBookStatus(false);setUserStatus(true);}}
                className={userStatus?"p-3 border-l border-r border-t rounded-t-sm  border-gray-600  text-blue-500":
                "p-3 border-b border-gray-600 cursor-pointer"}>
                Users
              </div>
            </div>
            {
              bookStatus &&
              <div className='px-10 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center'>
                {/* Card */}
                <div className="p-2 w-full max-w-[16rem] shadow-xl text-center rounded-lg">
                  <img src="./Ikigai.jpg" alt="" 
                    style={{height:"300px" , width:'100%'}}/>
                  <h2 className="text-2xl">Ikigai</h2>
                  <p>Lorem........</p>
                  <h4 className='text-lg text-blue-500'>& 40</h4>
                  <button className='bg-green-500 text-white border border-green-600 w-full py-2 hover:bg-white hover:text-green-700'>Approve</button>
                </div>
                <div className="p-2 w-full max-w-[16rem] shadow-xl text-center rounded-lg">
                  <img src="./AtomicHabits.jpg" alt="" 
                  style={{height:"300px" , width:'100%'}}/>
                  <h2 className="text-2xl">Atomic Habits</h2>
                  <p>Lorem........</p>
                  <h4 className='text-lg text-blue-500'>& 90</h4>
                  <button className='bg-green-500 text-white border border-green-600 w-full py-2 hover:bg-white hover:text-green-700'>Approve</button>
                </div>
                <div className="p-2 w-full max-w-[16rem] shadow-xl text-center rounded-lg">
                  <img src="./richdad.jpg" alt="" 
                  style={{height:"300px" , width:'100%'}}/>
                  <h2 className="text-2xl">Rich Dad Poor Dad</h2>
                  <p>Lorem........</p>
                  <h4 className='text-lg text-blue-500'>& 50</h4>
                  <button className='bg-green-500 text-white border border-green-600 w-full py-2 hover:bg-white hover:text-green-700'>Approve</button>
                </div>
                <div className="p-2 w-full max-w-[16rem] shadow-xl text-center rounded-lg">
                  <img src="./Think.jpg" alt="" 
                  style={{height:"300px" , width:'100%'}}/>
                  <h2 className="text-2xl">Think And Grow Rich</h2>
                  <p>Lorem........</p>
                  <h4 className='text-lg text-blue-500'>& 60</h4>
                  <button className='bg-green-500 text-white border border-green-600 w-full py-2 hover:bg-white hover:text-green-700'>Approve</button>
                </div>
              </div>
            }
            {
              userStatus &&
              <div className='px-10 py-5 flex flex-wrap justify-around gap-5'>
                {/* user cards */}
                <div className='max-w-[18rem] border bg-gray-100 py-2 px-4'>
                  <h1 className="text-center my-4 text-amber-900">ID : vhehg152dd</h1>
                  <div className='grid grid-cols-3 gap-3'>
                    <div className='col-span-1'>
                      <img src="https://www.nicepng.com/png/detail/202-2024580_png-file-profile-icon-vector-png.png" alt=""
                        width={'150px'} />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center'>
                      <h2 className="text-blue-600 text-lg">Username</h2>
                      <p className='text-green-700'>username@gmail.com</p>
                    </div>
                  </div>
                </div><div className='max-w-[18rem] border bg-gray-100 py-2 px-4'>
                  <h1 className="text-center my-4 text-amber-900">ID : vhehg152dd</h1>
                  <div className='grid grid-cols-3 gap-3'>
                    <div className='col-span-1'>
                      <img src="https://www.nicepng.com/png/detail/202-2024580_png-file-profile-icon-vector-png.png" alt=""
                        width={'150px'} />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center'>
                      <h2 className="text-blue-600 text-lg">Username</h2>
                      <p className='text-green-700'>username@gmail.com</p>
                    </div>
                  </div>
                </div><div className='max-w-[18rem] border bg-gray-100 py-2 px-4'>
                  <h1 className="text-center my-4 text-amber-900">ID : vhehg152dd</h1>
                  <div className='grid grid-cols-3 gap-3'>
                    <div className='col-span-1'>
                      <img src="https://www.nicepng.com/png/detail/202-2024580_png-file-profile-icon-vector-png.png" alt=""
                        width={'150px'} />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center'>
                      <h2 className="text-blue-600 text-lg">Username</h2>
                      <p className='text-green-700'>username@gmail.com</p>
                    </div>
                  </div>
                </div><div className='max-w-[18rem] border bg-gray-100 py-2 px-4'>
                  <h1 className="text-center my-4 text-amber-900">ID : vhehg152dd</h1>
                  <div className='grid grid-cols-3 gap-3'>
                    <div className='col-span-1'>
                      <img src="https://www.nicepng.com/png/detail/202-2024580_png-file-profile-icon-vector-png.png" alt=""
                        width={'150px'} />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center'>
                      <h2 className="text-blue-600 text-lg">Username</h2>
                      <p className='text-green-700'>username@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default BookList