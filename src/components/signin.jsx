import React from 'react';
import heart from '../assets/diamond-1857736_1280.png';


function Signin() {
  return (
    <div className="   flex h-[var(--custom-height)] items-center justify-center">
      <div className=" flex  content-end justify-center p-8">
      <div className=" bg-gray-200 w-full max-w-md p-6 rounded-b-3xl flex items-center justify-center opacity-75">
          <form>
          <div className="mb-4 ">
                  <label htmlFor="exampleInputEmail1" className="block text-black">Email address</label>
                  <input type="email" className="form-input mt-1 block w-full outline-blue-500 outline-1 focus:outline-green-500 p-2 rounded-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="text-sm text-gray-600">We'll never share your email with anyone else.</div>
                </div>
            <div className="mb-4">
              <label htmlFor="exampleInputPassword1" className="block text-black">Password</label>
              <input type="password" className="form-input mt-1 block w-full outline-blue-500 outline-1 focus:outline-green-500 p-2 rounded-lg" id="exampleInputPassword1" />
            </div>
            <div className="mb-4">
              <input type="checkbox" className="form-checkbox" id="exampleCheck1" />
              <label className="ml-2 text-gray-700" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn bg-blue-800 text-white py-2 px-4 rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;