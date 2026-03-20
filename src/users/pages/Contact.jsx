import React from 'react'
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { IoIosPin } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function Contact() {
  return (
    <>
     <Header/>
       <div className='min-h-[60vh] px-5 py-10 md:px-40'>
       <h1 className='text-4xl text-center'>Contact</h1>
       <p className='text-justify my-5'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, sunt? Necessitatibus sit, voluptatibus architecto optio veniam impedit totam molestias id asperiores consequuntur alias, rem aliquid, et nam! Natus, provident atque?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla incidunt praesentium aperiam dicta, quo provident amet aspernatur fuga sunt doloribus harum eligendi laborum, alias magnam. Voluptas esse sed nesciunt molestias.
       </p>
       <div className='flex flex-col justify-center md:flex-row md:justify-around gap-5'>
        {/* Address */}
        <div className='flex items-center'>
          <span className='p-4 bg-gray-400 inline-block rounded-full'>
            <IoIosPin className='text-black text-2xl' />
          </span>
          <span>
            123 Main Street, Apt 4B,
            EastTown, CA 91234
          </span>
        </div>

        <div className='flex items-center'>
          <span className='p-4 bg-gray-400 inline-block rounded-full'>
            < FaPhoneAlt className='text-black text-2xl' />
          </span>
          <span>
           +91 9867452310
          </span>
        </div>
        
         <div className='flex items-center'>
          <span className='p-4 bg-gray-400 inline-block rounded-full'>
            <FaEnvelope  className='text-black text-2xl' />
          </span>
          <span>
           Bookstore@gmail.com
          </span>
        </div>
        
       
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-4'>
       <div className='p-3 bg-gray-200'>
       <h1 className='text-center text-xl'>Send me Message</h1>
       <input type="text" className='w-full mt-5 bg-white rounded-sm py-2' placeholder='Name ' />
       <input type="text" className='w-full mt-5 bg-white rounded-sm py-2' placeholder='Email ID ' />
       <textarea name="" id="" className='w-full  mt-5 bg-white rounded-sm py-2' rows={'8'} placeholder='Message'>
       </textarea>
       <button className='bg-black text-white py-4 w-full flex justify-center items-center gap-2'>Send <IoIosSend/></button>
        </div>

       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.032971758471!2d75.78116707481243!3d11.25898478892061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65900d568d853%3A0x86dc9f15ee869de3!2sLuminar%20Technolab%20-%20Software%20Training%20Institute%20in%20Calicut!5e0!3m2!1sen!2sin!4v1771478321705!5m2!1sen!2sin" width="100%" style={{minHeight:"450px"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
       ></iframe>



       </div>
      </div>
      <Footer/>
     </>
  )
}

export default Contact
