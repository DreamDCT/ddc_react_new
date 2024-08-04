import React from "react";

export default function forBtnScript(loginModal: boolean, registerModal: boolean, setLoginModal: React.Dispatch<React.SetStateAction<boolean>>, setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>) {
    if (loginModal) setLoginModal(!loginModal);
    if (registerModal) setRegisterModal(!registerModal);
}
