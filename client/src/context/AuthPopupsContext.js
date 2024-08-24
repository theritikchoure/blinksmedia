import React, { createContext, useState } from "react";

// Create a context for the auth popups
export const AuthPopupsContext = createContext();

const AuthPopupsProvider = ({ children }) => {
  // State to manage the visibility of popups
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  // Functions to handle opening and closing popups
  const openLoginPopup = () => setLoginPopupOpen(true);
  const closeLoginPopup = () => setLoginPopupOpen(false);

  return (
    <AuthPopupsContext.Provider
      value={{
        isLoginPopupOpen,
        openLoginPopup,
        closeLoginPopup,
      }}
    >
      {children}
    </AuthPopupsContext.Provider>
  );
};

export default AuthPopupsProvider;
