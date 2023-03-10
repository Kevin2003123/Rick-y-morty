import React, {useEffect, useState} from "react";
import SearchBar from "../SearchBar";
import s from "./Nav.module.css"
import {Link, useLocation} from "react-router-dom"

export default function Nav ({onSearch}){
    let location = useLocation();

    const [login, setLogin] = useState(false);
    useEffect(()=>{
        if(location.pathname === "/") setLogin(true);
        else setLogin(false);
    },[location])

    
    return (<div className={`${s.divNav} ${login && s.display}`}>
        <div className={`${s.navlink}`}>
        <Link className={`${s.link}`} to={"/home"}>HOME</Link>
        <Link className={`${s.link}`} to={"/about"}>About</Link>
        <Link className={`${s.link}`} to={"/favorites"}>Favorites</Link>
        </div>

        <SearchBar onSearch={onSearch}/>
       
        
        </div>);


}