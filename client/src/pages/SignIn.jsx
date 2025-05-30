import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
// import axios from 'axios'

import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice"; 
import { useDispatch, useSelector} from 'react-redux'

function SignIn() {

  const [formData, setFormData] = useState({});
 
  const {loading, error: errorMessage} = useSelector((state)=> state.user);

  //dispatch redux toolkit
  const dispatch = useDispatch();


  // useNavgiate() to Signin.jsx
  const navigate = useNavigate();

  const handleChange = (e)=>{
     setFormData({...formData, [e.target.name]:e.target.value.trim()})
  }

 const handleSubmit = async(e)=>{

      e.preventDefault(); // not refresh the page

      if(!formData.email || !formData.password)
      {
        return dispatch(signInFailure("Please fill out all fields"));
      }

      //fetch method
      try {

        dispatch(signInStart())
        
        const res = await fetch('/api/auth/signin',{
          method : "POST",
          headers : {"Content-Type" : "application/json"},
          body : JSON.stringify(formData)
        })
        
        const  data = await res.json();

          if(data.success === false)
          {
            dispatch(signInFailure(data.message));
          }

          if(res.ok)
          {
            dispatch(signInSuccess(data))
            navigate("/");
          }

        console.log(data);

       

        // const res = await axios.post('http://localhost:3000/api/auth/signin', {formData})

        // console.log(res.data);
        // console.log("work")

      } 
      catch (error) {

          dispatch(signInFailure(error.message));
      }
 }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row md:items-center   p-3 max-w-3xl mx-auto gap-5">
        {/* left side  */}
        <div className="left flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r from-indigo-500 
              via-purple-500 to-pink-500 rounded-lg text-white"
            >
              Aakash's
            </span>
            Blog
          </Link>

          <p className="text-sm mt-5">
            This is a demo Project. You can sign in with your email and password
            or with google
          </p>
        </div>

        {/* right side  */}
        <div className="right flex-1  ">

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

           
            <div className="">
              <Label htmlFor="email">Your Email</Label>
              <TextInput type="email" placeholder="name@company.com" name="email"  onChange={handleChange} />
            </div>

            <div className="">
              <Label htmlFor="password">Password</Label>
              <TextInput type="password" placeholder="************" name="password"  onChange={handleChange} />
            </div>

           <Button className="bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500  text-white hover:via-purple-600
            hover:to-pink-600 cursor-pointer" type="submit" disabled={loading} > 
            
            {
              loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading..</span>
                </>
              ) : "Sign In"
            }
             </Button>


          </form>

            <div className="flex gap-2 text-sm mt-5">
              <span>Don't have an account ?</span>
              <Link to="/signup" className="text-blue-500"> Sign Up </Link>
            </div>

            {
                errorMessage && (
                  <Alert className="mt-5 " color="failure">
                    {errorMessage}
                  </Alert>
                )
            }

        </div>
      </div>
    </div>
  );
}

export default SignIn;
