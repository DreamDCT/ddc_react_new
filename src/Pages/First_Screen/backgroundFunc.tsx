import React from "react";
// @ts-ignore
import bg from "../Assets/FirstScreen/bg.mp4";

export default function backgroundFunc(loginModal: boolean, registerModal: boolean) {
        if(loginModal || registerModal) {
            return (<video className={"Background-video object-cover h-full w-full blur"} src={bg} autoPlay loop muted/>)
        }
        return (<video className={"Background-video object-cover h-full w-full"} src={bg} autoPlay loop muted/>)
}