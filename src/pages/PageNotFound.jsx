import React from 'react'

function PageNotFound() {
  return (
    <>
      <div className='min-h-screen flex justify-center items-center'>
        <div className='w-[50%] h-[50%]'>
           <img className='mx-auto w-[50%] h-[50%]' src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-gif-download-3299960.gif" 
           alt="noimg" />
           <h2 className='text-center'>Oh No!</h2>
           <h1 className='text-3xl text-center'>Look Like You Are Lost</h1>
           <h1 className='text-center'>The page you are not looking for is unavailable.</h1>
           <button>Back Home</button>
        </div> 
               
         
      </div>
    </>
  )
}

export default PageNotFound
