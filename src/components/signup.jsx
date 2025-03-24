
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const axiosPostUserInfo = async () => {
    const userInfo = {
      fullName : username,
      email,
      password
    }

    try {
      const response = await axios.post("http://localhost:3000/user/signup", userInfo);
      if (response.status === 200) {
        setShowSuccess(true);
        setErrorMessage("");  
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      setErrorMessage("Signup failed. Please try again.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosPostUserInfo();
    console.log(username
      , email, password);
      e.target.reset();
  }


  return (
    <div className=" bg-emerald-400  flex h-[var(--custom-height)] items-center justify-center">
      <div className="flex-col  content-end justify-center p-8">

      {showSuccess && (
        <div className="mt-4 mb-4 px-4 py-2 text-green-700 bg-green-100 border border-green-400 rounded-lg">
          Signup successful! 🎉 Welcome aboard!
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 mb-4 px-4 py-2 text-red-700 bg-red-100 border border-red-400 rounded-lg">
          {errorMessage}
        </div>
      )}
        <div className=" bg-emerald-100 mb-4 p-2 text-center rounded-tr-3xl shadow-md">
          <h4>
            <span className="text-3xl font-serif font-medium">SignUp</span>
          </h4>
          <p className="text-sm">please enter your details to signup</p>
        </div>
        <div className=" bg-emerald-100  w-full max-w-md shadow-md p-6 rounded-b-3xl flex items-center justify-center ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label htmlFor="username" className="block text-black">
                Username
              </label>
              <input
                type="username"
                onChange={(e) => setUsername(e.target.value)}
                className="form-input mt-1 block w-full outline-blue-500 outline-1 focus:outline-green-500 p-2 rounded-lg"
                id="username"
                aria-describedby="username"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="exampleInputEmail1" className="block text-black">
                Email address
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-input mt-1 block w-full outline-blue-500 outline-1 focus:outline-green-500 p-2 rounded-lg"
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
                onChange={(e) => setPassword(e.target.value)}
                className="form-input mt-1 block w-full outline-blue-500 outline-1 focus:outline-green-500 p-2 rounded-lg"
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

export default Signup;
