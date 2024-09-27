import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import authenticationService from "../../services/authenticationService";
import { AuthContext } from "../../context/AuthenticationContext";
const LoginPopup = ({ onClose }) => {

   const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("demouser@blinksmedia.in");
  const [password, setPassword] = useState("Demo@1234");
  const [remember_me, setRememberMe] = useState(false);

  const handlePopupClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Perform form validation or API call here
      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      let res = await authenticationService.login(
        { email, password },
        remember_me
      );

      login(res.user, res.token);

      // Reset form fields after submission
      setEmail("");
      setPassword("");
      setRememberMe(false);

      toast.success("Successfully logged in! Good to see you again.");

      // Close the popup (if desired)
      handlePopupClose();

    } catch (error) {
      console.error(error)
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-charcoal-gray">
            Or below credentials
          </p>
          <p className="mt-2 text-center text-sm text-charcoal-gray">
            email: demouser@blinksmedia.in
            <br />
            password: Demo@1234
          </p>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full">
          <div className="py-8 px-4 sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                    autoComplete="off"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
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
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-charcoal-gray focus:outline-none focus:ring-blinks-blue focus:border-blinks-blue focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    onChange={handleRememberMe}
                    className="h-4 w-4 text-blinks-blue focus:ring-blinks-blue border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-charcoal-gray"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blinks-secondary hover:text-white bg-blinks-primary hover:bg-blinks-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blinks-blue"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
