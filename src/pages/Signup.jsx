import React from "react";
import image from '../assets/images/login.avif';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { SocialIcon } from 'react-social-icons'


const Signup = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-slate-900 p-8 lg:p-0 gap-20">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="w-full max-w-lg p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-md">
          <h2 className="text-4xl font-bold text-center text-orange-400">Sign Up</h2>
          <form className="mt-2">
            <div className="mb-4">
              <label className="block text-lg font-medium text-white">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
            </div>
            <div className="mb-12">
              <label className="block text-lg font-medium text-white">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
            <p className="mt-2 text-md text-white">
            Forgot Password?{" "}
            <a href="/login" className="text-orange-400 hover:text-orange-500 hover:underline font-semibold">
              Recover
            </a>
          </p>
            </div>
            
            <button className="w-full font-semibold px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700">
              Sign Up
            </button>
          </form>
          <p className="mt-2 mb-4 text-md text-center text-white">
            Already have an account? {" "}
            <a href="/login" className="text-orange-400 font-semibold hover:text-orange-500 hover:underline">
              Login
            </a>
          </p>
          <div className="social">
          <h2 className="text-lg font-bold text-center text-white border-t-2 py-4">Or Sign Up With</h2>
            <ul className="flex flex-row gap-4 items-center justify-center">
              <li><a href="#" className="text-xl"><SocialIcon className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300" url="https://twitter.com" /></a></li>
              <li><a href="#" className="text-xl"><SocialIcon className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300" url="https://mailto.com" /></a></li>
              <li><a href="#" className="text-xl"><SocialIcon className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300" url="https://facebook.com" /></a></li>
              <li><a href="#" className="text-xl"><SocialIcon className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300" url="https://linkedin.com" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
