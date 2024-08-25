import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authenticationService from "../../services/authenticationService";
import { AuthContext } from "../../context/AuthenticationContext";

const RegisterPopup = ({ onClose }) => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [initialValue, setInitialValue] = useState({});

  const handlePopupClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleFormChange = (key, value) => {
    setInitialValue({
      ...initialValue,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log(initialValue);

      // Perform form validation or API call here
      if (
        !initialValue.name ||
        !initialValue.email ||
        !initialValue.password ||
        !initialValue.confirm_password ||
        !initialValue.username
      ) {
        alert("Please fill in all fields.");
        return;
      }

      if (initialValue.password !== initialValue.confirm_password) {
        alert("Passwords do not match.");
        return;
      }

      let res = await authenticationService.register({
        name: initialValue.name,
        email: initialValue.email,
        username: initialValue.username,
        password: initialValue.password,
        // confirm_password: initialValue.confirm_password,
      });

      login(res.user, res.token);

      alert("Registration successful");

      setInitialValue({});

      // Close the popup (if desired)
      handlePopupClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleEscKeyPress = (e) => {
      if (e.key === "Escape") {
        handlePopupClose();
      }
    };

    // Attach the event listener
    document.addEventListener("keydown", handleEscKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  return (
    <div className="fixed z-50 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="relative max-h-full w-full p-4 max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <div
          className="absolute right-8 cursor-pointer"
          onClick={handlePopupClose}
        >
          <svg
            className="w-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Menu / Close_MD">
              <path
                id="Vector"
                d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        <div className="sm:mx-auto sm:w-full">
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

        <div className="mt-2 sm:mx-auto sm:w-full">
          <div className="py-8 px-4 sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                    onChange={(e) => handleFormChange("name", e.target.value)}
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
                    onChange={(e) => handleFormChange("email", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-charcoal-gray"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                    placeholder="Enter your username"
                    onChange={(e) =>
                      handleFormChange("username", e.target.value)
                    }
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
                    autoComplete=""
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                    onChange={(e) =>
                      handleFormChange("password", e.target.value)
                    }
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
                    autoComplete=""
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-charcoal-gray placeholder-charcoal-gray text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                    placeholder="Confirm your password"
                    onChange={(e) =>
                      handleFormChange("confirm_password", e.target.value)
                    }
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blinks-secondary hover:text-white bg-blinks-primary hover:bg-blinks-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blinks-blue"
                >
                  Sign up
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
    </div>
  );
};

export default RegisterPopup;
