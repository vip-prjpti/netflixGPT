import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>

        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/CA-en-20251110-TRIFECTA-perspective_b4f926fd-6870-46b7-9342-6746c5c9ca1e_large.jpg" alt="" />
      </div>
      <form className='w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-lg '>
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
        <input type="text" placeholder='Email address' className='p-4 my-4 w-full bg-gray-700 ' />
        {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 ' />)}
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 ' />
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer'>{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className='p-4 my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New To Netflix? Sign up here!" : "Already Registered? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login