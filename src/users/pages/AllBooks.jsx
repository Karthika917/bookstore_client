import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function AllBooks() {
  return (
    <>
   
    <div>
      <Header/>
      <div className='min-h-[60vh] py-10 px-5 md:px-10'>
        <h1 className='text-center text-3xl'>Collections</h1>
        <div className='flex justify-center items-center mb-4'>
          <input type="text" placeholder='Search By Title' className='placeholder-gray-100 border py-2 my-2 w-[50%]' />
          <button className='py-2 px-2 bg-blue-800 text-white border border-blue-800 hover:bg-white hover:text-blue-800'>
            Search </button>
        </div>
        <div className='md:grid grid-cols-5'>
        <div className='col-span-1 '>
          <h1 className='text-2xl'mb-5>Filters</h1>
          <div className='my-4'>
             <input type="radio" value={'Literary Fiction'} name='filter' />
             <label htmlFor="">Literary Fiction</label>
          </div>
          <div className='my-4'>
             <input type="radio" value={'Literary Fiction'} name='filter' />
             <label htmlFor="">Literary Fiction</label>
           </div>
            <div className='my-4'>
             <input type="radio" value={'Literary Fiction'} name='filter' />
             <label htmlFor="">Literary Fiction</label>
          </div>
           <div className='my-4'>
             <input type="radio" value={'Literary Fiction'} name='filter' />
             <label htmlFor="">Literary Fiction</label>
          </div>
          <div className='my-4'>
             <input type="radio" value={'Literary Fiction'} name='filter'/>
             <label htmlFor="">Literary Fiction</label>
          </div>
          </div>
          <div className='col-span-4 w-full mt-5 flex flex-col items-center md:flex-row md:justify-center gap-2  '>
          <Link to={'/books/:id/view'}>
            <div className='p-1 w-[70%] md:w-[16rem] shadow-xl text-center'>
            <img src="/book1.jpg" alt="bookimg"
            style={{height:"300px", width:"100%"}}  />
            <h2 className='text-lg'>Atomic Habits</h2>
            <p>Lorem ipsum...</p>
            <h4 className='text-lg text-blue-600'>$40</h4>
         </div>
         </Link>
           <div className='p-1 w-[70%] md:w-[16rem] shadow-xl text-center'>
            <img src="/book1.jpg" alt="bookimg"
            style={{height:"300px", width:"100%"}}  />
            <h2 className='text-lg'>Atomic Habits</h2>
            <p>Lorem ipsum...</p>
            <h4 className='text-lg text-blue-600'>$40</h4>
         </div>
           <div className='p-1 w-[70%] md:w-[16rem] shadow-xl text-center'>
            <img src="/book1.jpg" alt="bookimg"
            style={{height:"300px", width:"100%"}}  />
            <h2 className='text-lg'>Atomic Habits</h2>
            <p>Lorem ipsum...</p>
            <h4 className='text-lg text-blue-600'>$40</h4>
         </div>
           <div className='p-1 w-[70%] md:w-[16rem] shadow-xl text-center'>
            <img src="/book1.jpg" alt="bookimg"
            style={{height:"300px", width:"100%"}}  />
            <h2 className='text-lg'>Atomic Habits</h2>
            <p>Lorem ipsum...</p>
            <h4 className='text-lg text-blue-600'>$40</h4>
         </div>

          </div>
        </div>
      </div>
    </div>
    <Footer/>
     </> 
  )
}

export default AllBooks
