import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/Adminheader'
import Footer from '../../components/Footer'

import { MdDelete } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";


function CareerList() {

  const[jobStatus, setJobStatus] = useState(true)
  const[applicationStatus, setApplicationStatus] = useState(false)

   const [modalStatus,setModalStatus]=useState(false)

  return (
    <>
      <AdminHeader/>
      <div className='min-h-[60vh] md:grid grid-cols-4'>
          <div className='col-span-1'>
              <AdminSidebar/>
          </div>
          <div className='col-span-3 p-5'>
              <h1 className='text-center text-2xl my-10'>Careers</h1>
              {/* Tabs */}
              <div className='flex justify-center items-center my-5'>
                <div onClick={()=>{setJobStatus(true);setApplicationStatus(false)}}
                className={jobStatus? 'p-3 border border-r border-t rounded-t-sm border-gray-600  text-blue-600 ':
                  'p-3 border-b border-gray-600 cursor-pointer' }>
                  Job Post
                </div>
                <div onClick={()=>{setJobStatus(false);setApplicationStatus(true)}} 
                className={applicationStatus? 'p-3 border border-r border-t rounded-t-sm border-gray-600 text-blue-600' :
                  'p-3 border-b border-gray-600 cursor-pointer'}>
                  View Applicants
                </div>
              </div>
              {/* Search and Add Jobs */}
              {
                jobStatus &&
                 <div className='px-10 flex justify-between'>
                <div>
                  <input type="text" className='py-2 border bg-white px-2' placeholder='Search by Title' />
                  <button className='bg-blue-900 text-white p-2 border hover:bg-white hover:text-blue-900'>Search</button>
                </div>
                <button onClick={()=>{setModalStatus(true)}} className='bg-green-800 text-white p-2 border hover:bg-white hover:text-green-800 rounded-sm'>
                  Add Job +
                </button>
              </div>
              }
              {
                jobStatus &&
                   <div className='my-5 px-10'>
                {/* Job Card */}
                <div className='border-2 border-gray-500 shadow-lg py-5 px-5 flex flex-col md:grid grid-cols-7'>
                  <div className="col-span-6">
                    <h1 className="text-lg mb-2">Job Title</h1>
                    <hr/>
                    <p className="mt-5 flex gap-2 items-center"><FaLocationDot className='text-blue-800' />Location :</p>
                    <p className="mt-5">Job Type :</p>
                    <p className="mt-5">Salary :</p>
                    <p className="mt-5">Qualification :</p>
                    <p className="mt-5">Experience:</p>
                    <p className="mt-5">Description :</p>
                  </div>
                  <div className='px-10'>
                    <button className='bg-red-700 text-white p-1 float-end md:p-3 md:float-start hover:bg-white hover:text-red-700 border hover:border-red-700 rounded-sm flex items-center'>
                      Delete <MdDelete className='text-xl'/>
                    </button>
                  </div>
                </div>

              </div>
              }
           {
            applicationStatus &&
            <div className='my-5 px-10'>
             <table className='w-full'>
              <thead className='bg-blue-600 text-white'>
                <tr>
                  <th className='p-2 border border-gray-500'>SL.NO</th>
                  <th className='p-2 border border-gray-500'>Job Title</th>
                  <th className='p-2 border border-gray-500'>Name</th>
                  <th className='p-2 border border-gray-500'>Qualification</th>
                  <th className='p-2 border border-gray-500'>Email</th>
                  <th className='p-2 border border-gray-500'>Phone</th>
                  <th className='p-2 border border-gray-500'>Cover Letter</th>
                  <th className='p-2 border border-gray-500'>Resume</th>
              
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-2 border border-gray-500'>1</td>
                  <td className='p-2 border border-gray-500'>Jnr Software Engineer</td>
                  <td className='p-2 border border-gray-500'>Karthika P</td>
                  <td className='p-2 border border-gray-500'>BTech</td>
                  <td className='p-2 border border-gray-500'>karthika@gmail.com</td>
                  <td className='p-2 border border-gray-500'>9856473527</td>
                  <td className='p-2 border border-gray-500'></td>
                  <td className='p-2 border border-gray-500 underline text-blue-700'>Resume</td>
                </tr>
              </tbody>
             </table>
             </div>
           }
           {
                     modalStatus &&
                     <div className="relative z-10" >
                       <div className="bg-gray-500/75 fixed inset-0">
                         <div className="flex justify-center items-center min-h-screen">
                           <div className="bg-white rounded-2xl" style={{minHeight:'500px',width:'500px'}}>
                             <div className="bg-black text-white flex justify-between items-center p-3 rounded-t-2xl">
                               <h1 className="text-xl">Application Form</h1>
                               <button onClick={()=>{setModalStatus(false)}}>
                                 <IoClose />
                               </button>
                             </div>
                            <div className='p-2'>
                              <input type="text" placeholder='Job Title' className='p-2 border bg-white placeholder-gray-600 w-full rounded-sm mb-2' />
                              <input type="text" placeholder='Location' className='p-2 border bg-white placeholder-gray-600 w-full rounded-sm mb-2' />
                              <input type="text" placeholder='Job Type' className='p-2 border bg-white placeholder-gray-600 w-full rounded-sm mb-2' />
                              <input type="text" placeholder='Salary' className='p-2 border bg-white placeholder-gray-600 w-full rounded-sm mb-2' />
                              <input type="text" placeholder='Qualification' className='p-2 border bg-white placeholder-gray-600 w-full rounded-sm mb-2' />
                              <input type="text" placeholder='Experience' className='p-2 border bg-white placeholder-gray-600 w-full rounded-sm mb-2' />
                              <textarea name="" placeholder='Description' className='p-2 border bg-white placeholder-gray-600 w-full rounded-sm mb-2' id=""></textarea>
                            </div>
                            <div className='bg-gray-200 p-3 flex justify-end gap-3 rounded-b-2xl'>
                             <button className='px-3 py-2 border rounded-sm bg-red-500 text-white hover:bg-white hover:border-red-500 hover:text-red-500'>
                              RESET
                             </button>
                              <button className='px-3 py-2 border rounded-sm bg-green-700 text-white hover:bg-white hover:border-green-500 hover:text-green-500'>
                              ADD
                             </button>
                            </div>
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

export default CareerList