import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Browse from './Browse.jsx'
import Login from './Login.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice.js'
import { auth } from '../utils/firebase.js'

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName,photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photo:photoURL }));
            } else {
                // User is signed out
                dispatch(removeUser());

            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />

        </div>
    )
}

export default Body