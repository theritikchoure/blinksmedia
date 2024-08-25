import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/api/v1/application/users/auth`; // Replace with your API URL

// Function to handle user login
export const login = async (payload, remember_me) => {
  try {

    console.log(API_URL)
    const response = await axios.post(`${API_URL}/login`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (remember_me) {
      // Save the token to localStorage or sessionStorage
      localStorage.setItem("authToken", response.data.token);
    } else {
      sessionStorage.setItem("authToken", response.data.token);
    }

    return response.data; // Return the user data
  } catch (error) {
    // Handle errors
    if (error.response && error.response.status === 401) {
      throw new Error("Invalid email or password");
    } else {
      throw error;
    }
  }
};

export const register = async (payload, remember_me) => {
  try {

    const response = await axios.post(`${API_URL}/register`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    sessionStorage.setItem("authToken", response.data.token);

    return response.data; // Return the user data
  } catch (error) {
    // Handle errors
    if (error.response && error.response.status === 401) {
      throw new Error("Invalid email or password");
    } else {
      throw error;
    }
  }
};

let authenticationService = {
  login,
  register
};

export default authenticationService;