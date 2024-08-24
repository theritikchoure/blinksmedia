import React, { useContext } from "react";
import LoginPopup from "./LoginPopup";
import { AuthPopupsContext } from "../../context/AuthPopupsContext";

const AuthPopups = () => {
  const { isLoginPopupOpen, closeLoginPopup } = useContext(AuthPopupsContext);

  return <>{isLoginPopupOpen && <LoginPopup onClose={closeLoginPopup} />}</>;
};

export default AuthPopups;
