import React, {useState} from "react";
import DDLogo from "../Assets/FirstScreen/DreamDealersLogo.gif"
import backgroundFunc from "./backgroundFunc"
import blurBtn from "./btnBlur"
import LoginField from "./LoginField"
import RegisterField from "./RegisterField"


export default  function FirstScreen() {
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);

    return (
        <div className = {"ScreenPage"}>
            <div className= {"Screen"}>
                <div className="DreamDealersLogo absolute w-[219px] h-[73px] flex-shrink">
                    <div className="logo relative top-[120px] left-[800px]">
                        <img src={DDLogo} alt=""/>
                    </div>
                </div>
                <div className="bg w-screen h-screen">
                    {backgroundFunc(loginModal,registerModal)}
                </div>
                {blurBtn(loginModal,registerModal,setLoginModal,setRegisterModal)}
                {loginModal && (LoginField(loginModal,registerModal,setLoginModal,setRegisterModal))}
                {registerModal && (RegisterField(loginModal,registerModal,setLoginModal,setRegisterModal))}

                <div className="BottomText absolute w-full h-[30px]">
                    <div className={"bottomText text-white grid grid-cols-5 gap-x-[20px]"}>
                        <div className="Terms relative left-[30px] font-ZtChablisRegular">
                            Условия использования
                        </div>
                        <div className="Terms font-ZtChablisRegular">
                            Политика конфиденциальности
                        </div>
                        <div className="DD font-Cyberpunk mt-[5px] text-center">
                            © Dream Dealer's concern 2024
                        </div>
                        <div className="font-ZtChablisRegular relative left-[150px]">О нас</div>
                        <div className="font-ZtChablisRegular ">
                            <a href="https://google.com">Telegram</a>
                            <a className={"ml-[20px]"} href="https://google.com">Youtube</a>
                            <a className={"ml-[20px]"} href="https://google.com">Discord</a>
                            <a className={"ml-[20px]"} href="https://google.com">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}