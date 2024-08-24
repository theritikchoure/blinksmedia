// AuthPopupsContext.js
import React, { createContext, useState } from "react";

export const AuthPopupsContext = createContext();

const AuthPopupsProvider = ({ children }) => {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

  const openLoginPopup = () => setIsLoginPopupOpen(true);
  const closeLoginPopup = () => setIsLoginPopupOpen(false);

  const openRegisterPopup = () => setIsRegisterPopupOpen(true);
  const closeRegisterPopup = () => setIsRegisterPopupOpen(false);

  return (
    <AuthPopupsContext.Provider
      value={{
        isLoginPopupOpen,
        openLoginPopup,
        closeLoginPopup,
        isRegisterPopupOpen,
        openRegisterPopup,
        closeRegisterPopup,
      }}
    >
      {children}
    </AuthPopupsContext.Provider>
  );
};

export default AuthPopupsProvider
