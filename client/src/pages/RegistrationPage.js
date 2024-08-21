import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-light-gray flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-blinks-blue hover:text-blinks-blue-dark">
            <span className="text-xl font-bold">Home</span>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-charcoal-gray">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-charcoal-gray">
          Or{" "}
          <Link
            to="/login"
            className="font-medium text-blinks-blue hover:text-blinks-blue-dark"
          >
            sign in to your account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            {/* Form Fields */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-charcoal-gray"
              >
                Full name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-charcoal-gray"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-charcoal-gray"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium text-charcoal-gray"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blinks-blue hover:bg-blinks-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blinks-blue"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-charcoal-gray"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-light-gray text-charcoal-gray">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-charcoal-gray rounded-md shadow-sm text-sm font-medium text-charcoal-gray bg-white hover:bg-gray-50"
                >
                  <img
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                    alt="Facebook"
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-charcoal-gray rounded-md shadow-sm text-sm font-medium text-charcoal-gray bg-white hover:bg-gray-50"
                >
                  <img
                    className="h-5 w-5"
                    src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                    alt="Twitter"
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-charcoal-gray rounded-md shadow-sm text-sm font-medium text-charcoal-gray bg-white hover:bg-gray-50"
                >
                  <img
                    className="h-6 w-6"
                    src="https://www.svgrepo.com/show/506498/google.svg"
                    alt="Google"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
