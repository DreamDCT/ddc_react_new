import React from "react";
import login from "../Assets/FirstScreen/login.gif";
import loginTEXT from "../Assets/FirstScreen/loginTEXT.png";
import register from "../Assets/FirstScreen/register.gif";
import registerTEXT from "../Assets/FirstScreen/registerTEXT.png";

export default function blurBtn(loginModal: boolean, registerModal: boolean, setLoginModal: React.Dispatch<React.SetStateAction<boolean>>, setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>) {
    if (loginModal || registerModal)
    {
        return (
            <div className="btn blur">
                <button className={"Login-Button absolute w-1/4 top-0 right-0"} title={"Login"} onClick={() => setLoginModal(!loginModal)}>
                    <img src={login} alt={""}/>
                    <img className="mix-blend-lighten relative bottom-[120px] left-[70px] w-[8rem]" src={loginTEXT} alt=""/>
                </button>
                <button className={"Register-Button absolute w-1/4  top-0"} title={"Login"} onClick={() => setRegisterModal(!registerModal)}>
                    <img src={register} alt={""}/>
                    <img className="relative mix-blend-lighten bottom-[120px] left-[168px] w-[14.5rem]" src={registerTEXT} alt=""/>
                </button>
            </div>
        )
    }
    return (
        <div className="btn">
            <button className={"Login-Button absolute w-1/4 top-0 right-0"} title={"Login"} onClick={() => setLoginModal(!loginModal)}>
                <img src={login} alt={""}/>
                <img className="mix-blend-lighten relative bottom-[120px] left-[70px] w-[8rem]" src={loginTEXT} alt=""/>
            </button>
            <button className={"Register-Button absolute w-1/4  top-0"} title={"Login"} onClick={() => setRegisterModal(!registerModal)}>
                <img src={register} alt={""}/>
                <img className="relative mix-blend-lighten bottom-[120px] left-[168px] w-[14.5rem]" src={registerTEXT} alt=""/>
            </button>
        </div>
    )
}