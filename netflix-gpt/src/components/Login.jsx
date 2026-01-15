import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate';
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { USER_AVATAR } from '../utils/constants';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(" ");
    setIsSuccess(false);

  }

  // userRef hook - to refernece the value from the form which is not going to render
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value, fullName.current?.value || "", isSignInForm);

    if (message === null) {
      setIsSuccess(true);
      setErrorMessage("Welcome user!");
    }
    else {
      setIsSuccess(false);
      setErrorMessage(message);
    }
    // setErrorMessage(message);
    // setIsSuccess(message === "Welcome");

    // if(message === "Welcome"){
    //   return
    // }

    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value, photoURL: USER_AVATAR
          }).then(() => {
          }).catch((error) => {
            console.log(error.message);
          });
          console.log(user);

        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });

      }
      else {
        //  signInLogic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user, "user Signed In")

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
  });
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute'>

        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/CA-en-20251110-TRIFECTA-perspective_b4f926fd-6870-46b7-9342-6746c5c9ca1e_large.jpg" alt="" />
      </div>
      <form onSubmit={(e) => { e.preventDefault() }} className='w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-lg '>
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input type="text" ref={email} placeholder='Email address' className='p-4 my-4 w-full bg-gray-700 ' />
        {!isSignInForm && (<input ref={fullName} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 ' />)}
        <input type="password" ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700 ' />
        <p className={isSuccess ? 'text-green-500 text-lg' : 'text-red-500'}>{errorMessage}</p>
        <button onClick={handleButtonClick} className='p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign up here!" : "Already Registered? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login