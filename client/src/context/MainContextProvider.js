import React, { createContext } from "react";
import AuthPopupsProvider from "./AuthPopupsContext";
import { AuthenticationProvider } from "./AuthenticationContext";

// Create a context
export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  // You can manage state or any logic that should be available throughout your app here

  return (
    <MainContext.Provider value={{}}>
      <AuthenticationProvider>
        <AuthPopupsProvider>
          {/* Wrap other providers here if needed */}
          {children}
        </AuthPopupsProvider>
      </AuthenticationProvider>
    </MainContext.Provider>
  );
};

export default MainContextProvider;
