import React, {useEffect, useState} from "react";
import s from "./Detail.module.css";
import { useParams } from "react-router-dom"; 

export default function Detail() {
    const {detailId} = useParams();
    console.log(detailId);
    const [character,setCharacter]= useState({});
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
            console.log(char.name);
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

      
    return(<div className={s.container}>
        <div className={s.info}>
        <h2>NOMBRE: {character.name}</h2>
        <p>STATUS: {character.status}</p>
        <p>ESPECIE: {character.species}</p>
        <p>GENERO: {character.gender}</p>
        <p>ORIGIN: {character.origin?.name}</p>
        </div>

        <div className={s.imgContainer}>
    <img src={character.image} alt="Character"/>
        </div>
        </div>)
};
