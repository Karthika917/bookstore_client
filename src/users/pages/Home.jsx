import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { latestBookApi } from '../../services/allApi'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { searchContext } from '../../contextApi/ContextApi';


function Home() {
  const [latestBooks, setLatestBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const {globalSearchKey,setGlobalSearchKey} = useContext(searchContext)

  useEffect(() => {
    fetchLatestBooks();
  }, []);

  const fetchLatestBooks = async () => {
    try {
      setLoading(true);
      const result = await latestBookApi();
      if (result.status === 200) {
        setLatestBooks(result.data);
      } 
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  const gotoBooks = ()=>{
    navigate('/books')
  }

  return (
    <>
      <Header />
      <>
        {/* Hero */}
        <section className='w-full h-[60vh] bg-[url(/landing.jpg)] bg-cover bg-center bg-fixed'>
          <div className='w-full h-[60vh] bg-[rgba(0,0,0,0.3)] flex justify-center items-center'>
            <div className='w-[50%] text-white text-center'>
              <h1 className='text-5xl'>Wonderful Gifts</h1>
              <h2 className='text-2xl'>Give your family and friends a book</h2>
              <div className='mt-5 flex items-center bg-white p-2 rounded-full relative'>
                <input type="text" onChange={(e)=>{setGlobalSearchKey(e.target.value)}} placeholder='Search Books' className='placeholder-gray-700 text-black w-full focus:outline-none' />
                <FaMagnifyingGlass className='text-blue-950 me-1 absolute right-5' onClick={gotoBooks} />
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className='my-3 px-5 md:px-40'>
          <h1 className='text-center text-2xl'>New Arrivals</h1>
          <h1 className='text-center text-4xl'>Explore Our Latest Collection</h1>

          {loading ? (
            <div className='flex justify-center items-center mt-10 h-[300px]'>
              <p className='text-gray-500 text-lg'>Loading books...</p>
            </div>
          ) : error ? (
            <div className='flex justify-center items-center mt-10 h-[300px]'>
              <p className='text-red-500'>{error}</p>
            </div>
          ) : (
            <div className='w-full mt-5 flex flex-wrap justify-center gap-2'>
              {latestBooks.length > 0 ? (
                latestBooks.map((book) => (
                  <div key={book._id} className='p-1 w-[70%] sm:w-[45%] md:w-[16rem] shadow-xl text-center'>
                    <img
                      src={book.image || '/book1.jpg'}  // adjust field name if different
                      alt={book.title}
                      style={{ height: '300px', width: '100%', objectFit: 'cover' }}
                    />
                    <h2 className='text-lg'>{book.title}</h2>
                    <p className='text-sm text-gray-600 truncate px-2'>{book.description}</p>
                    <h4 className='text-lg text-blue-600'>${book.price}</h4>
                  </div>
                ))
              ) : (
                <p className='text-center text-gray-500 mt-10'>No books available.</p>
              )}
            </div>
          )}

          <div className='mt-5 flex justify-center'>
            <button className='px-3 bg-blue-900 text-white py-2'>Explore More...</button>
          </div>
        </section>

        {/* Featured Authors */}
      <section className='my-20 px-5 md:px-40 grid md:grid-cols-2 gap-10'>
        <div>
          <h1 className="text-xl text-center">Featured Author</h1>
          <h2 className="text-3xl text-center">Captivates with every word</h2>
          <p className="text-justify mt-3">
            A featured author is a literary voice that resonates deeply with readers, captivating hearts and minds through the power 
            of storytelling. With a unique ability to weave emotions, imagination, and insight into every sentence, their work transcends
            ordinary narratives and creates unforgettable reading experiences. Each page reflects their passion, creativity, and dedication
            to the craft, drawing readers into worlds filled with meaning, inspiration, and authenticity. Through compelling characters and 
            thought-provoking themes, this author continues to leave a lasting impression, making every word a journey worth exploring.
          </p>
          <p className="text-justify mt-3">
            Renowned for their exceptional storytelling and distinctive voice, this featured author brings stories to life with
            elegance and depth. Their writing effortlessly blends creativity with emotion, allowing readers to connect with every
            character and moment on a personal level. With each carefully crafted sentence, they transport audiences into immersive 
            worlds filled with inspiration, imagination, and meaning. Their work not only entertains but also encourages reflection, 
            making every piece a memorable experience that lingers long after the final page is turned.
          </p>
        </div>
        <div className="flex items-center">
          <img src="./Author.jpg" alt=""
          className='items-center w-full' style={{height:'450px'}}/>
        </div>
      </section>

      {/* Testimonials */}
      <section className="my-20 px-5 md:px-40">
        <h1 className="text-lg text-center">Testimonials</h1>
        <h1 className="text-3xl text-center mb-12">See What Others Are Saying</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2DLmYZo2GBfZN41zHJev2tOF2Ohe6wt9bw&s" 
                alt="John Luther" 
                className='rounded-full mb-4' 
                style={{height:'100px', width:'100px', objectFit:'cover'}}
              />
              <h3 className="text-lg font-semibold">John Luther</h3>
              <p className="text-sm text-gray-500 mb-4">Book Enthusiast</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              This bookstore offers an excellent collection of books across various genres. The user-friendly interface and affordable prices make it easy to find exactly what I'm looking for. Fast delivery and quality service!
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <img 
                src="https://humusgroup.com/wp-content/uploads/2017/02/testimonial-woman.png" 
                alt="Sarah Mitchell" 
                className='rounded-full mb-4' 
                style={{height:'100px', width:'100px', objectFit:'cover'}}
              />
              <h3 className="text-lg font-semibold">Sarah Mitchell</h3>
              <p className="text-sm text-gray-500 mb-4">Student</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              As a student, I appreciate the diverse selection and competitive pricing. The smooth ordering process and reliable delivery make this my go-to platform for all my reading needs.
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnXH-lm5FInc9lYQFM7PAbZ0Cq6yuVuqSTQ&s" 
                alt="Michael Chen" 
                className='rounded-full mb-4' 
                style={{height:'100px', width:'100px', objectFit:'cover'}}
              />
              <h3 className="text-lg font-semibold">Michael Chen</h3>
              <p className="text-sm text-gray-500 mb-4">Professional Reader</p>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Exceptional service! The collection is curated well, and the platform's organization makes browsing effortless. I've recommended this bookstore to all my colleagues.
            </p>
          </div>

         

         
         
        </div>
      </section>
      </>
      <Footer />
    </>
  );
}

export default Home;