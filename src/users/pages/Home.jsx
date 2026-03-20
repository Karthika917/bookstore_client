import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaMagnifyingGlass } from "react-icons/fa6";


function Home() {

  
  return (
    <>
      <Header/>
     <>
     {/* Hero */}
     <section className='w-full h-[60vh] bg-[url(/landing.jpg)] bg-cover bg-center bg-fixed '>
       <div className='w-full h-[60vh] bg-[rgba(0,0,0,0.3)] flex justify-center items-center'>
        <div className='w-[50%] text-white text-center'>
            <h1 className='text-5xl'>Wonderful Gifts</h1>
            <h2 className='text-2xl'>Give your family and friends a book</h2>
            <div className='mt-5 flex items-center bg-white p-2 rounded-full relative'>
              <input type="text" placeholder='Search Books' className='placeholder-gray-700 text-black w-full focus:outline-none ' />
              <FaMagnifyingGlass className='text-blue-950 me-1 absolute right-5' />
            </div>
        </div>

       </div>
     </section>
     {/* New Arrivals */}

     <section className='my-3 px-5 md:px-40 '>
       <h1 className='text-center text-2xl'>New Arrivals</h1>
       <h1 className='text-center text-4xl'>Explore Our Latest Collection</h1>
      <div className='w-full mt-5 md:flex justify-center gap-2 '>
         
         {/* Card */}
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

          <div className='p-1 w-[70%] md:w-[16rem] shadow-xl text-center'>
            <img src="/book1.jpg" alt="bookimg"
            style={{height:"300px", width:"100%"}}  />
            <h2 className='text-lg'>Atomic Habits</h2>
            <p>Lorem ipsum...</p>
            <h4 className='text-lg text-blue-600'>$40</h4>
         </div>
       </div>
       <div className='mt-5 flex justify-center'>
        <button className='px-3 bg-blue-900 text-white py-2'>Explore More...</button>
       </div>
     </section>
     
     {/* Featured authors */}
     <section className='my-20 px-5 md:px-40 grid md:grid-cols-2 gap-20'>
        <div>
          <h1 className='text-xl text-center'>FEATURED AUTHORS</h1>
          <h1 className='text-3xl text-center'>Captivates with every word</h1>
          <p className='text-justify mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut optio, dolorum, asperiores odio voluptatibus recusandae doloribus vero iusto, modi inventore sunt aliquid provident molestias quibusdam non error quia magni.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ab, earum amet et enim explicabo saepe, alias ipsam, nam aspernatur mollitia deserunt quos! Adipisci consequatur debitis quos ipsum recusandae pariatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi dolores fugit blanditiis, culpa facilis repellat quasi quia, aliquid modi minus? Repellat itaque aut porro ratione animi optio consequatur. Ad.
          </p>
          <p className='text-justify mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum amet, illum optio numquam reprehenderit suscipit magnam laborum corporis. A labore adipisci harum esse aut dolore quibusdam nostrum temporibus quisquam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis impedit ad, voluptate voluptatibus sequi iste nulla atque praesentium perspiciatis recusandae voluptas harum quibusdam voluptates provident dolorem quas, et laborum assumenda.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sint tenetur eveniet quas. Rem, accusamus? Perspiciatis tenetur fugit earum eos ratione officiis totam consequatur, soluta amet, laudantium facilis praesentium eaque?
          </p>
        </div>
        <div >
          <img src="/Author.jpg" alt="authorimg" className='h-[80%]'/>
        </div>
     </section>

     {/* Testimonials */}
     <section className='text-center my-20 px-5 md:px-40'>
      <h1 className='text-lg'>TESTIMONIALS</h1>
      <h1 className='text-3xl'>See What Others Are Saying</h1>
      <div className='flex flex-col items-center my-5'>
        <img src="https://w7.pngwing.com/pngs/362/14/png-transparent-businessperson-smile-graphy-businessman-people-public-relations-innovation-thumbnail.png" alt=""
        className='rounded-full mt-5' style={{height:'200px', width:'200px'}} />
        <h2>Jonh Doe</h2>
      </div>
      <p className='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cum consequatur odio eligendi assumenda, quia temporibus consequuntur, porro tenetur delectus eaque in nostrum minus rem laudantium? Aspernatur libero optio velit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque incidunt asperiores quaerat aperiam eligendi ipsa saepe, laborum nam illum molestias doloremque tempore a officiis, consequuntur hic nemo quam recusandae. Iusto.
      </p>
     </section>
     </>
 
      <Footer/>
    </>
  )
}

export default Home