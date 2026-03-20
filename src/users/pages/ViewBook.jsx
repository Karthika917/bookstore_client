import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaAnglesLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";

import Header from '../components/Header'
import Footer from '../../components/Footer'

function ViewBook() {
  const [modalStatus,setModalStatus]=useState(false)
  return (
    <>
      <Header/>
      <div className="min-h-[60vh] p-5">
        <div className="border p-7 md:grid grid-cols-4">
          <div className="col-span-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gVUgOqZ7aabPqsUXL5_OogJNzHBoCEUglQ&s"
              alt="book" style={{height:'100%',width:'90%'}}
            />
          </div>
          <div className="col-span-3">
            <h1 className="text-center font-bold">
              Rich Dad Poor Dad
            </h1>
            <p className="text-center text-violet-600">Robert T. Kiyosaki</p>

            <div className="flex justify-end">
              <button className="text-xl text-gray-500">
              <FaEye onClick={()=>{setModalStatus(true)}}/>
              </button>
            </div>

            <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                <span className="font-semibold">Publisher : Penguin</span>
                <span className="font-semibold">Language : English</span>
                <span className="font-semibold">No.Of Pages : 336 pages</span>
        
                <span className="font-semibold">Seller Mail : Penguinbooks@gmail.com</span>
                <span className="font-semibold">Real Price : English</span>
                <span className="font-semibold">ISBN : 9781612681139</span>
            </div>

              <p className="my-5 text-justify ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                earum iusto laboriosam odit totam, cum minima sunt dolorum
                laudantium officiis debitis excepturi pariatur voluptate commodi
                corrupti deleniti? Explicabo, expedita suscipit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Esse voluptate, qui
                porro dolor enim dicta numquam laudantium debitis labore,
                ducimus repellendus illo ab ipsam magni pariatur eum omnis
                tempora facere! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Magni vero fuga quis ipsam, cum vel optio
                tenetur quos nulla, voluptates repellendus aspernatur nobis,
                blanditiis consequatur. Deleniti maiores quaerat voluptatibus
                nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis vero temporibus est esse sequi neque vitae placeat,
                dolorum debitis modi sed quidem dicta consequuntur porro
                expedita quibusdam dignissimos harum maxime. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Corrupti nemo debitis
                optio, perferendis, eaque rem in ducimus facere, perspiciatis
                quas qui ab nostrum dignissimos? Magni error temporibus rem
                eveniet totam. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Nesciunt, numquam. Doloremque distinctio
                asperiores recusandae qui, a fugit soluta voluptatum dicta odit
                sint quis ipsa dolorum nesciunt officia iure unde adipisci!
              </p>

            <div className="flex md:justify-end justify-center gap-5">
              <button className="flex gap-2 bg-blue-600/80 items-center p-2 rounded-sm text-white">
              <FaAnglesLeft /> Back
              </button>

              <button className="bg-green-500/95 text-white p-2 rounded-sm">
              Buy <span>15$</span>
              </button>
            </div>
          </div>
        </div>
        {
          modalStatus &&
          <div className="relative z-10" onClick={()=>{setModalStatus(false)}}>
            <div className="bg-gray-500/75 fixed inset-0">
              <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white rounded-2xl" style={{height:'500px',width:'900px'}}>
                  <div className="bg-black text-white flex justify-between items-center p-3 rounded-t-2xl">
                    <h1 className="text-xl">Book Images</h1>
                    <button>
                      <IoClose />
                    </button>
                  </div>
                  <h2 className="text-lg text-blue-600 flex gap-3 items-center m-3">
                    <FaCamera />
                    Camera click of the book in the hand of seller
                  </h2>
                  {/* Images */}
                  <div className="flex gap-5 overflow-x-auto"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gVUgOqZ7aabPqsUXL5_OogJNzHBoCEUglQ&s" alt="" width={'300px'}/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gVUgOqZ7aabPqsUXL5_OogJNzHBoCEUglQ&s" alt="" width={'300px'}/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gVUgOqZ7aabPqsUXL5_OogJNzHBoCEUglQ&s" alt="" width={'300px'}/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gVUgOqZ7aabPqsUXL5_OogJNzHBoCEUglQ&s" alt="" width={'300px'}/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gVUgOqZ7aabPqsUXL5_OogJNzHBoCEUglQ&s" alt="" width={'300px'}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
      <Footer/>
    </>
  );
}

export default ViewBook;