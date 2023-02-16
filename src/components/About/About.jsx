import React from "react";
import Me from "../../assets/imgs/20230119_162038.jpg"
import s from "./About.module.css";
 export default function About (params) {
    return(<div className={s.about}>
        <h1>About</h1>
        <img src={Me} alt="Me Kevin Reyes"/>
        <p>Hello My name is Kevin Reyes, I am form Dominican Republic ,I am a passinate react programer. I have no formal experience programing web aplicacion</p>
        
        </div>)
}