import React from 'react'

import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'

import { SiBookstack } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";


function DashBoard() {
  return (
    <>
      <AdminHeader/>
      <div className='min-h-[60vh] md:grid grid-cols-4'>
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        <div className='col-span-3'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
            <div className='w-full bg-violet-600 py-10 text-shadow-white rounded-xl shadow'>
              <h1 className='text-2xl justify-center flex gap-3 items-center'>
                <SiBookstack className='text-6xl' />
                Total Number Of Books
              </h1>
              <h1 className='text-center text-2xl'>100 +</h1>
            </div>
            <div className='w-full bg-green-700 py-10 text-shadow-white rounded-xl shadow'>
              <h1 className='text-2xl justify-center flex gap-3 items-center'>
                <FaUsers className='text-6xl'/>
                  Total Number Of users
              </h1>
              <h1 className='text-center text-2xl'>100 +</h1>
            </div>
            <div className='w-full bg-yellow-600 py-10 text-shadow-white rounded-xl shadow'>
              <h1 className='text-2xl justify-center flex gap-3 items-center'>
                <GrUserWorker className='text-6xl' />
                Total Number Of Employees
              </h1>
              <h1 className='text-center text-2xl'>100 +</h1>
            </div>
          </div>
          <div className='md:grid grid-cols-2'>
            <div>Graph</div>
            <div>User graph</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default DashBoard