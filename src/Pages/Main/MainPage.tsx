import React from "react"
import Background from "../Assets/MainPage/Background.jpeg"
import DreamLogo from "../Assets/MainPage/DreamLogo.png"
import Home from "../Assets/MainPage/Home.png"
import Achive from "../Assets/MainPage/Achive.png"
import Notification from "../Assets/MainPage/Notification.png"
import user_circle from "../Assets/MainPage/user-circle.png"
import Logout from "../Assets/MainPage/Logout.png"

export default  function MainPage() {
    return (
        <div className={"MainPage w-screen h-screen bg-black"}>
            <div className="bg w-screen h-screen">
                <img className={"object-cover w-full h-full"} src={Background} alt=""/>
            </div>
            <div className="makeDark absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black/50"></div>
            <div className="Sidebar absolute object-cover w-[163px] h-screen left-[190px] bg-black/55 top-0 ">
                <img className={"DreamLogo font-ZtChablisRegular w-[140px] h-[140px] pl-[23px] pt-[32px]"} src={DreamLogo} alt=""/>
                <div className={"menu w-[130px] h-[298px] pt-[270px] pl-[16px] space-y-[45px] grid grid-cols-1 text-white"}>
                    <label className={"Home h-[24px] grid grid-cols-2"}>
                        <img className={"w-[20px] h-[20px]"} src={Home} alt=""/>
                        <a className={"Home_text relative -left-1/2"} href="/">Главная</a>
                    </label>
                    <label className={"Profile h-[24px] grid grid-cols-2"}>
                        <img className={"w-[20px] h-[20px]"} src={user_circle} alt=""/>
                        <a className={"Profile_text relative -left-1/2"} href="/">Профиль</a>
                    </label>
                    <label className={"Achievements h-[24px] grid grid-cols-2"}>
                        <img className={"w-[20px] h-[20px]"} src={Achive} alt=""/>
                        <a className={"Achievements_text relative -left-1/2"} href="/">Достижения</a>
                    </label>
                    <label className={"Notifications h-[24px] grid grid-cols-2"}>
                        <img className={"w-[20px] h-[20px]"} src={Notification} alt=""/>
                        <a className={"Notifications_text relative -left-1/2"} href="/">Уведомления</a>
                    </label>
                </div>
                <div className="Logout_Btn relative top-[450px] left-[25px]">
                    <button className={"w-[112px] h-[32px] bg-white/40 rounded-[5px] font-ZtChablisRegular text-white text-[18px]"}>
                        <label className={"grid grid-cols-2"}>
                            <img className={"w-[20px] h-[20px]"} src={Logout} alt=""/>
                            <div className={"Logout_text"}>Logout</div>
                        </label>
                    </button>
                </div>
            </div>
        </div>
    )
}