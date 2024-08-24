import React, { useContext } from "react";
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import { AuthPopupsContext } from "../../context/AuthPopupsContext";

const AuthPopups = () => {
  const {
    isLoginPopupOpen,
    closeLoginPopup,
    isRegisterPopupOpen,
    closeRegisterPopup,
  } = useContext(AuthPopupsContext);

  return (
    <>
      {isLoginPopupOpen && <LoginPopup onClose={closeLoginPopup} />}
      {isRegisterPopupOpen && <RegisterPopup onClose={closeRegisterPopup} />}
    </>
  );
};

export default AuthPopups;
