import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

function SignUp() {
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
          <form className="flex flex-col gap-4">
            <div className="">
              <Label htmlFor="username">Your username</Label>
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label htmlFor="email">Your Email</Label>
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div className="">
              <Label htmlFor="password">Password</Label>
              <TextInput type="text" placeholder="Password" id="password" />
            </div>

           <Button className="bg-gradient-to-r from-indigo-500 
              via-purple-500 to-pink-500  text-white hover:via-purple-600 hover:to-pink-600 cursor-pointer" type="submit"> Signup </Button>


          </form>

            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account ?</span>
              <Link to="/signin" className="text-blue-500"> Sign In </Link>
            </div>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
