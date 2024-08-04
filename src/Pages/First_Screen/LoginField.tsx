import forBtnScript from "./forBtnScript";
import LoginBtn from "../Assets/FirstScreen/LoginBtn.png";
import TelegramBtn from "../Assets/FirstScreen/TelegramBtn.png";
import React from "react";

export default function LoginField(loginModal: boolean, registerModal: boolean, setLoginModal: React.Dispatch<React.SetStateAction<boolean>>, setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>) {
    return (
        <div className="loginModalWindow w-screen h-screen top-0 bottom-0 right-0 left-0 absolute">
            <div className="Overlay w-screen h-screen top-0 bottom-0 right-0 left-0 absolute " onClick={() => forBtnScript(loginModal, registerModal, setLoginModal, setRegisterModal)}></div>
            <div className="RegField relative top-[160px] left-[580px] w-[525px] h-[540px] rounded-[20px] border-2 border-slate-400 bg-gradient-to-tr from-[#3d4245]/90 to-[#2f5063]/90 to-90%">
                <div className="textLOGIN text-center font-ObitaemOstrov text-[#F1FF4B] text-[70px]">ВХОД</div>
                <div className="input-box relative h-[52px] w-full left-[35px] text-[16px] text-white">
                    <input className={"py-[20px] pr-[40px] pl-[20px] w-[450px] h-[52px] bg-transparent outline-none border-2 border-solid rounded-[10px]"} id={"email"} type="email" placeholder={"Ваша почта"} required/>
                </div>
                <div className="input-box relative h-[52px] w-full top-[25px] left-[35px] text-[16px] text-white">
                    <input className={"py-[20px] pr-[40px] pl-[20px] w-[450px] h-[52px] bg-transparent outline-none border-2 border-solid rounded-[10px]"} id={"password"} type="password" placeholder={"Ваш пароль"} required/>
                </div>
                <a className={"Forgot text-white relative top-[30px] ml-[320px] font-ZtChablisRegular"} href="https://google.com">Еще нет учетной записи?</a>
                <div className="LoginBTN">
                    <button>
                        <img className={"LoginBTN relative left-[33px] top-[100px]"} src={LoginBtn} alt=""/>
                    </button>
                </div>
                <div className="textUnder relative font-ZtChablisRegular text-[30px] top-[100px] text-white text-center">или войти с</div>
                <div className="Lines mt-[80px]">
                    <div className="left_line w-[144px] border border-[#FFFFFF] ml-[37px]"/>
                    <div className="left_line w-[144px] border border-[#FFFFFF] ml-[340px]"/>
                </div>
                <div className="telegramBtn w-[454px] h-[48px]">
                    <button>
                        <img className={"TelegramBtn mt-[30px] ml-[34px] "} src={TelegramBtn} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}