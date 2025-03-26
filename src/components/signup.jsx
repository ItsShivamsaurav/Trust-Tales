import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserPlus, Mail, Lock, User } from "lucide-react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const axiosPostUserInfo = async () => {
    const userInfo = {
      fullName: username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        userInfo
      );
      if (response.status === 200) {
        setShowSuccess(true);
        setErrorMessage("");
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      setErrorMessage("Signup failed. Please try again.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosPostUserInfo();
    console.log(username, email, password);
    e.target.reset();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        <div className="text-center">
          <UserPlus className="h-12 w-12 text-purple-600 mx-auto" />
          <h2 className="mt-6 text-3xl font-bold text-gray-800">
            Create your account
          </h2>
          <p className="mt-2 text-gray-600">
            "Begin your journey of self-discovery today"
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                UserName
              </label>
              <div className="mt-1 relative">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
                <User className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
                <Mail className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Create a password"
                />
                <Lock className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Confirm your password"
                />
                <Lock className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
            >
              Create Account
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link
              to="/signin"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Sign in
            </Link>
          </div>
        </form>
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
      </div>
    </div>
  );
}

export default Signup;
