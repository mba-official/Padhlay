import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 p-8 lg:p-0">
      <div className="w-full max-w-md p-6 bg-gray-600 rounded-lg shadow-md">
      <h1 className='text-6xl font-bold text-center text-orange-400 mb-8 border-b-2'>PADHLAY</h1>
        <h2 className="text-3xl font-bold text-center text-white">Welcome Back</h2>
        <p className='text-center text-white font-semibold text-lg'>Login to continue</p>
        <form className="mt-2">
          <div className="mb-4">
            <label className="block text-md font-medium text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
          </div>
          <button className="w-full font-semibold px-4 py-2 mt-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700">
            Login
          </button>
        </form>
        <p className="mt-4 text-md text-center text-white">
          Don't have an account? <a href="/signup" className="text-orange-500 font-bold">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
