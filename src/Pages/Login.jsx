import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <section className="bg-gray-100 flex items-center justify-center min-h-screen px-10">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
          <div className="logo">
            <h1 className="text-4xl mb-5 text-center font-bold text-[#125774]">
              HealthBooker
            </h1>
          </div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Sign in to your account
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 font-medium ">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-2.5 border rounded-lg "
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 font-medium ">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-2.5 border rounded-lg"
                placeholder="••••••••"
                required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                Remember me
              </label>
              <a
                href="#"
                className="text-primary-600 hover:underline font-semibold dark:text-primary-500"
              >
                Forgot password?
              </a>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="text-white bg-[#125774] font-medium text-lg rounded-lg px-5 py-2.5 mb-2"
              >
                <Link to="/">Sign In</Link>
              </button>
            </div>
            <p className="text-center">
              Don't have an account yet? <br />
              OR <br />
              <a
                href="#"
                className="text-primary-600 hover:underline dark:text-primary-500"
              >
                <Link to="/Register">Sign Up</Link>
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
