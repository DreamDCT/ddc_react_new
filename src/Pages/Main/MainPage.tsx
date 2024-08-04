import React from "react"
import Background from "../Assets/MainPage/Background.jpeg"
import DreamLogo from "../Assets/MainPage/DreamLogo.png"
import Home from "../Assets/MainPage/Home.png"
import Achieve from "../Assets/MainPage/Achive.png"
import Shop from "../Assets/MainPage/shop.png"
import user_circle from "../Assets/MainPage/user-circle.png"
import Logout from "../Assets/MainPage/Logout.png"
import Medal from "../Assets/MainPage/medal.png"
import ArrowLeft from "../Assets/MainPage/ArrowLeft.png"
import ArrowRight from "../Assets/MainPage/ArrowRight.png"

export default  function MainPage() {
    return (
        <div className={"MainPage w-screen h-screen bg-black"}>
            <div className="bg w-screen h-screen">
                <img className={"object-cover w-full h-full"} src={Background} alt=""/>
            </div>
            <div className="makeDark absolute top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black/50"></div>
            <div className="Sidebar absolute object-cover w-[163px] h-screen left-[10%] bg-black/55 top-0 ">
                <img className={"DreamLogo font-ZtChablisRegular w-[140px] h-[140px] pl-[23px] pt-[32px]"} src={DreamLogo} alt=""/>
                <div className={"menu relative w-[130px] h-[298px] top-[80px] left-[16px] space-y-[45px] grid grid-cols-1 text-white"}>
                    <button className={"Home h-[24px] w-[130px] grid grid-cols-2"}>
                        <img className={"w-[20px] h-[20px]"} src={Home} alt=""/>
                        <a className={"Home_text relative -left-1/2 text-[#FFA800]"} href="/">Главная</a>
                    </button>
                    <button className={"Profile h-[24px] w-[130px] grid grid-cols-2"}>
                        <img className={"w-[20px] h-[20px]"} src={user_circle} alt=""/>
                        <a className={"Profile_text relative -left-1/2"} href="/">Профиль</a>
                    </button>
                    <button className={"Achievements h-[24px] w-[130px] grid grid-cols-2"}>
                        <img className={"w-[20px] h-[20px]"} src={Medal} alt=""/>
                        <a className={"Achievements_text relative -left-1/2"} href="/">Достижения</a>
                    </button>
                    <button className={"Forum h-[24px] w-[130px] grid grid-cols-2"}>
                        <img className={"w-[20px] h-[20px]"} src={Achieve} alt=""/>
                        <a className={"Forum_text relative -left-1/2"} href="/">Форум</a>
                    </button>
                    <button className={"Shop h-[24px] w-[130px] grid grid-cols-2"}>
                        <img className={"w-[20px] h-[20px]"} src={Shop} alt=""/>
                        <a className={"Shop_text relative -left-1/2"} href="/">Магазин</a>
                    </button>
                </div>
                <div className="Logout_Btn relative top-[450px] left-[25px]">
                    <button className={"h-8 px-3.5 py-[5px] bg-white/40 rounded-[5px] justify-center items-center gap-1 inline-flex"}>
                            <img className={"w-5 h-5 relative"} src={Logout} alt=""/>
                            <p className={"Logout_text w-14 h-[22px] text-white font-ZtChablisRegular"}>Выйти</p>
                    </button>
                </div>
            </div>
            <div className="RightBar absolute top-0 right-[25%] w-[5px] h-screen origin-top-left bg-white"/>
            <div className="Leaderboard absolute top-[10%] right-[10%] w-[225px] h-[225px] bg-white rounded-[10px]">

            </div>
            <div className="left-[42%] top-[1px] absolute text-white text-[50px] font-ObitaemOstrov">Новости</div>
            <div className="Online_board absolute h-[525px] w-[225px] bg-white right-[10%] top-[40%] rounded-[10px]">

            </div>
            <div className="video_news_board bg-gradient-to-r from-[#A30F3B]/[67%] to-[#47A78E]/[67%] to-[80%] w-[550px] h-[300px] absolute top-[20%] left-[31%]">
                <div className="video_news relative w-[99%] h-[98%] bg-white left-[3px] top-[3px]">

                </div>
            </div>
            <div className="Arrows w-screen h-screen absolute top-0 left-0 right-0 bottom-0">
                <button className="Arrow_left relative top-[275px] left-[27%]">
                    <img src={ArrowLeft} alt=""/>
                </button>
                <button className="Arrow_right relative top-[275px] left-[60.7%]">
                    <img src={ArrowRight} alt=""/>
                </button>
            </div>


        </div>
    )
}