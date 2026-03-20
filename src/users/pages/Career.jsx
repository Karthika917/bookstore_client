import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { GrShare } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

function Career() {

  const[modalStatus,setModalStatus]=useState(false)
  return (
    <>
     <Header/>
       <div className='min-h-[60vh] px-5 py-10 md:px-40'>
        {/* Intro */}
       <h1 className='text-4xl text-center'>Career</h1>
       <p className='text-justify my-5'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, sunt? Necessitatibus sit, voluptatibus architecto optio veniam impedit totam molestias id asperiores consequuntur alias, rem aliquid, et nam! Natus, provident atque?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla incidunt praesentium aperiam dicta, quo provident amet aspernatur fuga sunt doloribus harum eligendi laborum, alias magnam. Voluptas esse sed nesciunt molestias.
       </p>
       {/* Current Openings */}
       <div className='w-full mt-10'>
        <h1 className='text-2xl'>Currrent openings</h1>
        <div className='flex justify-center my-5'>
          <input type="text" className='border py-2' placeholder='Job Title' />
          <button className='bg-green-700 text-white p-2'>Search</button>
        </div>
        <div className='w-full'>
          <div className='border-2 border-gray-500 shadow-lg py-3 px-2 md:grid grid-cols-7  '>
             <div className='col-span-6'>
              <h1 className='text-lg mb-2'>Job Title</h1>
                <hr />
                <p className='mt-5 flex gap-2 items-center'><FaLocationDot  className='text-blue-800'/></p>
                <p className='mt-5'>Job Type:</p>
                <p className='mt-5'>Salary:</p>
                <p className='mt-5'>Qualification:</p>
                <p className='mt-5'>Experience:</p>
                <p className='mt-5'>Description:</p>
            

             </div>
             <div className='px-4 '>
             <button onClick={()=>{setModalStatus(true)}} className='bg-blue-800 p-4 text-white float-end rounded-sm flex items-center gap-1 '>
              Apply <GrShare />
             </button>


             </div>
             { modalStatus && 
            <div className="relative z-10" >
              <div className="bg-gray-500/75 fixed inset-0">
                <div className="flex justify-center items-center min-h-screen">
                  <div style={{width: "500px" }} className="bg-white rounded-2xl ">
                    <div className="bg-black text-white flex justify-between items-center p-3 rounded-t-2xl">
                      <h1 className="text-2xl font-bold">Application Form</h1>
                      <button onClick={()=>setModalStatus(false)}>
                        <IoClose className='text-2xl'/>
                      </button>
                    </div>
                    <div className="p-5">
                      <div className='grid grid-cols-2 gap-4 mb-5'>
                        <input type="text" placeholder="Full Name" className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"/>
                        <input type="text" placeholder="Qualification" className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"/>
                        <input type="text" placeholder="Email Id" className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"/>
                        <input type="text" placeholder="Phone Number" className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"/>
                      </div>
                      <textarea name="" placeholder="Cover Letter" className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full " id=""></textarea>
                      <div className='my-3'>
                        <label htmlFor="" className='text-lg justify-end text-gray-600'>Resume</label>
                        <input type="file" name='' id='' className='border w-full border-gray-500 cursor-pointer file:bg-gray-400 file:p-1'/>
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
        </div>
        
       </div>
       </div>
       <Footer/>
    </>
  )
}

export default Career