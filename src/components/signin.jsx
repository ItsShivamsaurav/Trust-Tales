import React from "react";
import heart from "../assets/diamond-1857736_1280.png";
import { useState } from "react";
import axios from "axios";
import { useUser } from "./context";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const axiosPostData = async() => {
    const postData = {
        email: email,
        password: password
    }

    try{
    const data = await axios.post(' http://localhost:3000/user/signin', postData)
    console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosPostData()
    e.target.reset();
  }
 

  return (
    <div className=" bg-emerald-400  flex h-[var(--custom-height)] items-center justify-center">
      <div className="  flex-col   content-end justify-center p-8">
        <div className="bg-emerald-100 mb-4 p-6 text-center rounded-tr-3xl shadow-md "><h4><span className="text-3xl font-serif font-medium">Welcome Back</span></h4>
        <p className="text-sm">please enter your details to signIn</p>
        </div>
        <div className=" bg-emerald-100  w-full max-w-md shadow-md p-6 rounded-b-3xl flex items-center justify-center ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label htmlFor="exampleInputEmail1" className="block text-black">
                Email address
              </label>
              <input
                type="email"
                className="form-input mt-1 block w-full outline-blue-500 outline-1 focus:outline-green-500 p-2 rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="text-sm text-gray-600">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="exampleInputPassword1"
                className="block text-black"
              >
                Password
              </label>
              <input
                type="password"
                className="form-input mt-1 block w-full outline-blue-500 outline-1 focus:outline-green-500 p-2 rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                className="form-checkbox"
                id="exampleCheck1"
              />
              <label className="ml-2 text-gray-700" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              className="btn bg-blue-800 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
