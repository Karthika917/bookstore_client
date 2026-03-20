import React from 'react'
import AdminHeader from '../components/Adminheader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer';
import { FaPen } from "react-icons/fa";
 
function Settings() {
  return (
    <>
      <AdminHeader/>
      <div className='min-h-[60vh] md:grid grid-cols-4'>
          <div className='col-span-1'>
              <AdminSidebar/>
          </div>
          <div className='col-span-3 p-5'>
              <h1 className='text-center text-3xl my-5'>Admin Settings</h1>
              <div className='md:grid grid-cols-2'>
                <div className='p-2'>
                  <p className='text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate accusamus architecto tempore eius dolorum aliquam perferendis molestias pariatur? Tempora aliquam rerum corrupti similique ipsum dicta, laboriosam non saepe enim veniam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, ducimus hic eum harum fuga perspiciatis delectus? Reprehenderit quisquam, quo tempora officiis eius nam nobis, a libero rerum dignissimos, cum ad?
                  </p>
                  <p className='text-justify mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, alias? Ipsa dicta dolore magnam. Voluptate rerum perferendis mollitia? Perferendis unde nulla adipisci eligendi corporis similique at, ipsam ipsa velit inventore!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ad cum laudantium fugit ut ullam, dignissimos et? Maxime, omnis rerum sequi, aliquam laborum quaerat alias, tempore odit impedit velit minima!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem ullam maiores praesentium quis, dolorum reiciendis eum voluptates ut sapiente blanditiis. Ducimus et explicabo deleniti labore ratione? Illo, deserunt fuga.
                  </p>
                </div>

                <div className='p-2'>
                  <div className='w-full h-full bg-sky-200 py-5 px-10'>
                    <div className='relative'>
                      <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt="adminprofile" 
                      className='w-[40%] h-[40%] mx-auto' />
                      <label htmlFor="file">
                        <input type="file" className='hidden' id='file'/>
                        <span className='bg-yellow-400 p-3 text-white rounded-sm absolute bottom-3 right-55'>
                          <FaPen />
                        </span>
                      </label>
                    </div>
                      <div>
                        <input type="text" className='w-full bg-white border rounded-sm my-5 py-2 px-2' placeholder='Username' />
                        <input type="text" className='w-full bg-white border rounded-sm my-5 py-2 px-2' placeholder='Password' />
                        <input type="text" className='w-full bg-white border rounded-sm my-5 py-2 px-2' placeholder='Confirm Password' />
                        <div className='mb-4 grid grid-cols-2 gap-2'>
                          <button className='bg-red-500  hover:bg-white hover:border-red-500 text-white p-3 hover:text-red-500'>Reset</button>
                          <button className='bg-green-500  hover:bg-white hover:border-green-500 text-white p-3 hover:text-green-500'>Reset</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Settings