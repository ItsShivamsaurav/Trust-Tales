import { NavLink } from "react-router-dom";
import logo from "../assets/birds.png";
import { NotebookTabs } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex bg-white h-26 ">
      <div className="flex-1 bg-green-200 flex items-center justify-center font-semibold text-4xl text-black rounded-t-3xl">
        Trust Tales
      </div>
      <div className="hidden sm:flex bg-yellow-300  flex-4  mt-5 mb-5  items-center justify-center rounded-t-3xl space-x-6 text-xl">
        <NavLink to="/home" className="text-black">
          Home
        </NavLink>
        <NavLink to="/diary" className="text-black">
          <button>Diary</button>
        </NavLink>
        <NavLink to="/contact" className="text-black">
          Contact
        </NavLink>
        <NavLink to="/about" className="text-black">
          About
        </NavLink>
        <NavLink to="/signin" className="text-black">
          Signin
        </NavLink>
        <NavLink to="/signup" className="text-black">
          Signup
        </NavLink>
      </div>

      <div className="relative flex sm:hidden bg-yellow-300 flex-1 mt-5 mb-5 items-center justify-center rounded-t-3xl space-x-6 text-xl">
        {/* Button */}
        <button onClick={toggleMenu}>
          <NotebookTabs size={48} color="black" />
          <span className="sr-only">Open Notebook</span>
        </button>

        {/* Menu */}
        <div
          className={`absolute top-full left-0 bg-white w-full p-4 rounded-md shadow-lg ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <NavLink to="/home" className="text-black text-center block p-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/diary" className="text-black text-center block p-2 hover:bg-gray-200 " onClick={() => setIsMenuOpen(false)}>
            <button>Diary</button>
          </NavLink>
          <NavLink to="/contact" className="text-black text-center block p-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/about" className="text-black text-center block p-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/signin" className="text-black text-center block p-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>
            Signin
          </NavLink>
          <NavLink to="/signup" className="text-black text-center block p-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>
            Signup
          </NavLink>
        </div>
      </div>

      <div className=" bg-green-600 flex flex-1  items-center justify-center mt-5 mb-5 ">
        <img className="h-15 w-15 mr-3 rounded-full" src={logo} alt="image" />
      </div>
    </div>
  );
}

export default Navbar;


