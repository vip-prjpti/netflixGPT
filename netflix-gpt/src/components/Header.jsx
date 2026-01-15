import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store=>store.user);

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            console.log(error);
            navigate("/error");
          });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photo: photoURL }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");

            }
        });
        return ()=> unsubscribe();
    }, [])

    return (
        <div className="absolute flex justify-between w-screen px-8 py-2 bg-linear-to-b from-black z-10">
            <img className="w-44" src={LOGO} alt="" />
            {user && <div className="flex p-2">
                <img className="w-12 h-12 " src={user?.photo} alt="usericon" />
                <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
            </div>}
        </div>
    )
}

export default Header