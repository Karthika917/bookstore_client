import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {signinApi, signupApi } from '../services/allApi'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';



function Auth({register}) {

  const navigate = useNavigate()

  const[user,setUser] = useState({
    username:"",email:"",password:""
  })
  
  const handleRegister = async()=>{
    console.log(user)
    const {username,email,password} = user
    if(!username || !email || !password){
      toast.info("Enter valid data")
    }
    else{
      const response = await signupApi(user)
      console.log(response)
      if(response.status===200){
         toast.success("Signup Successfull")
         setUser({username:"",password:"",email:""})
         navigate('/login')
         
      }
      else{
        toast.error("Signup Failed")
      }
    }
  }

  const handleLogin = async()=>{
   console.log(user)
   const{email,password} = user
   if(!email || !password){
     toast.info("Enter valid inputs")
   }
   else{
    const response = await signinApi(user)
    console.log(response)
    if(response.status===200){
      sessionStorage.setItem('token',response?.data?.token)
      sessionStorage.setItem('uname',response?.data?.username)
      toast.success("Signin successfull!")
      setUser({email:"",password:""})
      navigate('/')
    }
    else{
      toast.error(response?.data)
    }
   }
  }
  return (
   <>
   <div className='w-screen min-h-screen bg-[url(/bglogin.jpg)] bg-cover flex flex-col items-center py-10'>
     <h1 className='text-center text-4xl font-bold'>BOOK STORE</h1>
     <div className='md:w-[50%] py-3 bg-gray-800 mt-10 flex flex-col items-center'>
        <FaRegUserCircle className='text-8xl text-white my-5' />
        <h1 className='text-3xl text-white'>{register? <>Register</>:<>Login</>}</h1>
        <div className='w-full my-10 px-20'>
        <input type="text" onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email} placeholder='Email ID' className='w-full bg-white py-2 rounded-sm' />
          {
            register &&
             <input type="text" onChange={(e)=>{setUser({...user,username:e.target.value})}} value={user.username} placeholder='Username' className='w-full bg-white py-2 rounded-sm mt-5' />
          }
          <input type="text" onChange={(e)=>{(setUser({...user,password:e.target.value}))}} value={user.password} placeholder='Password' className='w-full bg-white py-2 mt-5 rounded-sm' />
          <div className='flex justify-between text-sm'>
            <span className='text-yellow-600'>*Never share your password with others</span>
            {
              !register &&
                <span className='text-white underline'>Forgot Password?</span>
            }
          
          </div>
          {
            register ?
              <button className='w-full bg-green-700 py-2 rounded-sm text-white font-semibold mt-4' onClick={handleRegister}>Register</button>
              :
              <>
              <button className='w-full bg-green-700 py-2 rounded-sm text-white font-semibold mt-4' onClick={handleLogin}>Login</button>
              <p className='my-5 border-b border-white'></p>
              <GoogleLogin
                onSuccess={credentialResponse => {
                console.log(credentialResponse);
                 }}
                onError={() => {
                console.log('Login Failed');
                }}
              useOneTap
               />;
              </>
          }
         
        </div>
        {
          register?
           <p className='text-white'>Already a User?<Link to={'/login'} className='text-blue-600 underline'> Login</Link></p>
           :
          <p className='text-white'>Are You a New User?<Link to={'/register'} className='text-blue-600 underline'> Register</Link></p>
        }
       
     </div>
   </div>
   </>
  )
}

export default Auth
