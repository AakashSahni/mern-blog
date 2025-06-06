import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import OAuth from "../components/OAuth";
// import axios from 'axios'

function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [Loading , setLoading] = useState(false);

  // useNavgiate() to Signin.jsx
  const navigate = useNavigate();

  const handleChange = (e)=>{
     setFormData({...formData, [e.target.name]:e.target.value.trim()})
  }

 const handleSubmit = async(e)=>{

      e.preventDefault(); // not refresh the page

      if(!formData.username || !formData.email || !formData.password)
      {
        return setErrorMessage("Please fill out all fields");
      }

      //fetch method
      try {

        setLoading(true);

        setErrorMessage(null);
        
        const res = await fetch('/api/auth/signup',{
          method : "POST",
          headers : {"Content-Type" : "application/json"},
          body : JSON.stringify(formData)
        })
        
        const  data = await res.json();
          if(data.success === false)
          {
            return setErrorMessage(data.message);
          }

          if(res.ok)
          {
            navigate("/signin");
          }

        console.log(data);

        setLoading(false);

        // const res = await axios.post('http://localhost:3000/api/auth/signup', {formData})

        // console.log(res.data);
        // console.log("work")

      } catch (error) {
          setErrorMessage(error.message);
        setLoading(false);

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
            This is a demo Project. You can sign up with your email and password
            or with google
          </p>
        </div>

        {/* right side  */}
        <div className="right flex-1  ">

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            <div className="">
              <Label htmlFor="username">Your username</Label>
              <TextInput type="text" placeholder="Username" name="username"  onChange={handleChange}/>
            </div>
            <div className="">
              <Label htmlFor="email">Your Email</Label>
              <TextInput type="email" placeholder="name@company.com" name="email"  onChange={handleChange} />
            </div>
            <div className="">
              <Label htmlFor="password">Password</Label>
              <TextInput type="password" placeholder="Password" name="password"  onChange={handleChange} />
            </div>

           <Button className="bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500  text-white hover:via-purple-600
            hover:to-pink-600 cursor-pointer" type="submit" disabled={Loading} > 

            
            {
              Loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading..</span>
                </>
              ) : "Sign Up"
            }
             </Button>

            <OAuth/>



          </form>

            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account ?</span>
              <Link to="/signin" className="text-blue-500"> Sign In </Link>
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

export default SignUp;
