import React,{useState, useEffect} from "react";
import s from "./Cards.module.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { addPj, deletePj } from "../redux/action";
import {useLocation} from 'react-router-dom'
import axios from 'axios';
 export function Card(props) {
   let location = useLocation()
   useEffect(()=>{
     if(props.myFavorites.some((x)=> x.id === props.id)) setFav(true)
      if(location.pathname==="/favorites") setStyle(true);


   },[props.myFavorites])
   const [isFav, setFav] = useState(false);
   const [style, setStyle] = useState(false);
   const handleFavorite = () =>{
      if(isFav) {
         setFav(false)
         props.deletePj(props.id)
  
      }else{
         setFav(true)
         props.addPj(props)
         
         
      }
   }

   return (
      <div className={s.divcard}>
      <div className={`${s.divcardButton} ${style && s.favorite}`}>
      {
         isFav ? (
            <button className={s.like} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={s.like} onClick={handleFavorite}>🤍</button>
         )
      }
      <button className={s.close} onClick={props.onClose}>X</button>
      
      </div>
          
         
         <div className={s.divNameImage}>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         <img  src={props.image} alt="" /> 
         </div>

         <div className={s.divGenderSpecies}>
         <h2>{props.gender}</h2>
         <h2>{props.species}</h2>
         </div>
        
      </div>
   );
}

export const mapDispatchToProps = (dispatch)=>{
   return{
      addPj: (pj)=> dispatch(addPj(pj)),
      deletePj: (id) => dispatch(deletePj(id))
   }
}

export const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)