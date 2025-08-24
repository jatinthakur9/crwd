import React from "react";

const AdminLoginChecking = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 p-4 font-inter">
      {/* Main container for the sign-in card */}
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left section: Welcome Page */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-indigo-800 to-purple-600 text-white p-8 md:p-12 flex flex-col justify-between rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
          {/* Logo section */}
          <div className="flex items-center mb-8">
            <div className="border-2 border-white rounded-full p-2 mr-3">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.809a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101"
                ></path>
              </svg>
            </div>
            <span className="text-xl font-semibold">LOGO</span>
          </div>

          {/* Welcome content */}
          <div className="flex-grow flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome Page
            </h1>
            <p className="text-lg mb-8">Sign in to continue access</p>
            {/* Placeholder for additional elements like circles */}
            <div className="relative w-full h-24 hidden md:block">
              <div className="absolute top-0 left-1/4 w-16 h-16 bg-purple-500 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-indigo-500 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>

          {/* Website URL */}
          <div className="text-sm mt-8 text-center lg:text-left">
            www.yoursite.com
          </div>
        </div>

        {/* Right section: Sign In Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center lg:text-left">
            Sign In
          </h2>

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Continue Button */}
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center">
            CONTINUE
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          {/* Or Connect with Social Media */}
          <div className="text-center text-gray-500 text-sm my-8">
            or Connect with Social Media
          </div>

          {/* Social Media Buttons */}
          <button className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold mb-4 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.46 6c-.8.36-1.65.6-2.54.7.9-.54 1.5-1.4 1.8-2.4-.84.5-1.78.87-2.77 1.07C18.78 3.4 17.6 3 16.35 3 14.05 3 12.17 4.9 12.17 7.2c0 .2.02.4.06.6C8.6 7.6 5.6 6 3.6 3.4c-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2 3.8-.7-.02-1.4-.2-2-.5v.03c0 2.1 1.5 3.8 3.5 4.2-.3.08-.7.13-1.1.13-.27 0-.53-.03-.78-.08.56 1.7 2.17 2.9 4 2.9C15 17 18 14.3 18 11.5c0-.2 0-.4-.02-.6.9-.6 1.6-1.5 2.2-2.4z"></path>
            </svg>
            Sign In With Twitter
          </button>

          <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
            </svg>
            Sign In With Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginChecking;
