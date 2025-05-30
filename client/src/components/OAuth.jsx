import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInFailure, signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom' 

function OAuth() {


    const dispatch = useDispatch();
    
    const navigate = useNavigate();

 const handleGoogleClick = async()=>{

    const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try {
  
            const resultsFromGoogle = await signInWithPopup(auth , provider)

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers : { 'Content-type' : 'application/json'},
                body: JSON.stringify({
                    name : resultsFromGoogle.user.displayName,
                    email : resultsFromGoogle.user.email,
                    googlePhotoUrl : resultsFromGoogle.user.photoURL,
                })
            })

            const data = await res.json();

            if(res.ok)
            {
                dispatch(signInSuccess(data));
                navigate("/");
            }

            // console.log(resultsFromGoogle);

        } catch (error) {

            dispatch(signInFailure(error.message));

        }
 }   

  return (
    <Button type='button' className=' text-black bg-white border-purple-400 border-2 cursor-pointer from-cyan-500 to-blue-500  hover:bg-gradient-to-r hover:from-orange-400 hover:via-purple-400 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 ' onClick={handleGoogleClick} >
        
        <AiFillGoogleCircle className='w-6 h-6 mr-2' />
        Continue With Google
    </Button>
  )
}

export default OAuth