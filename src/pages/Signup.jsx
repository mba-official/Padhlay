import React from "react";
import { SocialIcon } from "react-social-icons";

const Signup = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-br from-gray-700 via-slate-800 to-black">
      <h1 className="bg-transparent text-center text-6xl text-white lg:py-16 py-4 font-caesar ">PADHLAY</h1>
      <div className="flex items-center justify-center  p-8 lg:p-0 gap-20">
        <div className="w-full max-w-md bg-white/10 rounded-md p-6 backdrop-blur-md shadow-lg">
          <h2 className="text-4xl font-bold text-center text-orange-400">Sign Up</h2>
          <form className="mt-2">
            <div className="mb-4">
              <label className="block text-lg font-medium text-white">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 mt-2 border-2 bg-transparent text-white rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-white">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 mt-2 border-2 rounded-lg bg-transparent text-white"
              />
            </div>
            <div className="mb-12">
              <label className="block text-lg font-medium text-white">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 mt-2 border-2 rounded-lg bg-transparent text-white"
              />
              <p className="mt-2 text-md text-white">
                Forgot Password?{" "}
                <a
                  href="/login"
                  className="text-orange-400 hover:text-orange-500 hover:underline font-semibold"
                >
                  Recover
                </a>
              </p>
            </div>

            <button className="w-full font-semibold px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700">
              Sign Up
            </button>
          </form>
          <p className="mt-2 mb-4 text-md text-center text-white">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-orange-400 font-semibold hover:text-orange-500 hover:underline"
            >
              Login
            </a>
          </p>
          <div className="social">
            <h2 className="text-lg font-bold text-center text-white border-t-2 py-4">
              Or Sign Up With
            </h2>
            <ul className="flex flex-row gap-4 items-center justify-center">
              <li>
                <a href="#" className="text-xl">
                  <SocialIcon
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
                    url="https://twitter.com"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="text-xl">
                  <SocialIcon
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
                    url="https://mailto.com"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="text-xl">
                  <SocialIcon
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
                    url="https://facebook.com"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="text-xl">
                  <SocialIcon
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
                    url="https://linkedin.com"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
