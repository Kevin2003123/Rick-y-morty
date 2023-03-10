import React,{useState} from "react";
import s from "./Form.module.css"
export default function Login({log}){

    const [userData, setUserData] = useState({username:'', password:''});
    const [errors, setErrors] = useState({username:'', password:''})
    const handleChange = (e) =>{
        setUserData({...userData, [e.target.name]: e.target.value})
       setErrors({...validation({...userData, [e.target.name]: e.target.value})}) 
    } 

    const handleSubmit = (e) =>{
        e.preventDefault();
        log(userData);
    }

    const handleInstantLogin = (e) =>{
        e.preventDefault();
        setUserData({username:"kevinreyes005@gmail.com",password:"carta14123"});
    }
    const validation = (input) =>{
        let errors ={}
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.username)){
            errors= {...errors, username: "its not a valid email" }
        }

        if(input.username.length===0){
           errors= {...errors, username: "complete this input" }
        }

        if(input.username.length>35){
           errors= {...errors, username: "the length limit is 35" }
        }

        if(input.password.length<6 || input.password.length>10) {
            errors={...errors, password: "the length limit range 6-10" }
           
        }

        if(!/^(?=.*[0-9])/.test(input.password)) errors={...errors, password: "at least one number" }

        return errors;
    }
    return(
        
        <div className={s.container}>
        <form onSubmit={handleSubmit}>
        <label className={s.label}>Username: </label>
        <div>
        <input onChange={handleChange} value={userData.username} type="text" name="username" />
        <p className={s.warning}>{errors.username}</p>
        </div>
        <label className={s.label} >Password: </label>
        <div>
        <input onChange={handleChange} value={userData.password} type="password" name="password" />
        <p className={s.warning}>{errors.password}</p>
        </div>
        <button type="submit">LOGIN</button>

        <div className={s.instantLogin}>
        <span onClick={handleInstantLogin} >Click for instant Login</span>
        </div>
    
        </form>

       
        </div>);

}

