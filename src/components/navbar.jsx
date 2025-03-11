import { NavLink } from "react-router-dom";
import logo from '../assets/birds.png'
import { useState } from "react";


function Navbar(){


    return (

        <div className="flex bg-white h-26 ">
        <div className="  flex-1   flex items-center justify-center font-semibold text-4xl text-black rounded-t-3xl"> 
          Trust Tales
        </div>
        <div className="bg-yellow-300 flex flex-5  mt-5 mb-5  items-center justify-center rounded-t-3xl space-x-6 text-xl"> 
        <NavLink to="/home" className="text-black">Home</NavLink>
        <NavLink to="/diary" className="text-black">
        <button>Diary</button>
        </NavLink>
        <NavLink to="/contact" className="text-black">Contact</NavLink>
        <NavLink to="/about" className="text-black">About</NavLink>
        <NavLink to="/signin" className="text-black">Signin</NavLink>
        <NavLink to="/signup" className="text-black">Signup</NavLink>
          </div>  
        <div className="  flex flex-1  items-center justify-center mt-5 mb-5 "><img className="h-15 w-15 mr-3 rounded-full" src={logo} alt="image" /></div>
      </div>

    )
}

export default Navbar;