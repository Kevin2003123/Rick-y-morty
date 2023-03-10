import React,{useState}from "react";
import s from "./SearchBar.module.css";

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange = (e) =>{

      const {value} =e.target;
      setCharacter(value)
   }
   return (
      <div className={s.divSearch}>
          <input type='search' placeholder="ID" onChange={handleChange}/>
      <button onClick={()=>props.onSearch(character)}>Search</button>
      </div>
   );
}
