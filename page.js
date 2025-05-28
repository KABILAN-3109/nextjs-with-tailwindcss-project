import { FaFacebook, FaLinkedin, FaGoogle, FaEnvelope, FaRegEnvelope} from 'react-icons/fa';
import{MdLockOutline} from'react-icons/md';
import Head from 'next/head';

export default function login_page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <head>
        <title>login_page</title>
      </head>
    <main className="flex flex-col items-center justify-center w-full flex-1 px-2 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
            <div className="text-left font-bold ">
              <spam className="text-green-500">Company</spam>  Name
            </div>
            <div className="py-10">    
              <h2 className="text-3xl font-bold text-green-500 mb-2">sign in to <spam className="text-black">Account</spam></h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2  gap-2">
                <a href='#' className='border-2 border-gray-200 rounded-full p-3'>
                  <FaFacebook className='text justify-center'/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3'>
                  <FaLinkedin className='text justify-center'/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3'>
                  <FaGoogle className='text justify-center'/>
                </a>
              </div>
              <p className='text-green-600 my-3'>Or Use Your Email Account</p>
              <div className='flex flex-col items-center '>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-800 m-2'/>
                  <input type='email' name="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/>               
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-800 m-2'/>
                  <input type='password' name="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>               
                </div>
                <div className='flex w-64 mb-5 justify-between'>
                  <label className='flex items-center text-xs'><input type="checkbox" name='remember'className='mr-2'></input>Remember</label>
                  <a href='#' className='text-xs'>Forgot password?</a>
                </div>
                <a href="#" className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">Sign in</a>
              </div>              
            </div>
        </div>
        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, friend!</h2>
            <div  className="border-2 w-10 border-white inline-block mb-8"></div>
            <p className="mb-5 ">Fill up Personal Information and start Journey with us.</p>
            <a href="#" className=" border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">sign up</a>
        </div>
      </div> 
    </main>
   </div> 
  )
}
