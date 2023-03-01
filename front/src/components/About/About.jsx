import React from "react";
import Me from "../../assets/imgs/Kevin Reyes.jpg"
import s from "./About.module.css";
 export default function About (params) {
    return(
        <div className={s.container}>
        <div className={s.about}>
        <h1>About</h1>
        <img src={Me} alt="Me Kevin Reyes"/>
        <p>My professional goal is to use my programming skills and knowledge to contribute to the success of an 
        innovative and constantly growing company. I am looking for a position that will allow me to hone my technical 
        skills and collaborate on challenging projects that have a positive impact on the lives of end users. I promise 
        to keep learning and always be open to new technologies and methodologies to improve my skills and offer high quality 
        solutions.</p>
        
        </div>
        </div>
        )
}