import React,{useEffect} from 'react'
import s from "./favorites.module.css"
import Card from '../Card'
import { useDispatch , useSelector } from 'react-redux'
import { oderCards, filterCards } from '../../redux/action'
export const Favorites = () => {
  
  const dispatch = useDispatch();
  const myFavorites = useSelector(state=>state.allCharacters);
  
const handleSelect = (e) =>{
  dispatch(oderCards(e.target.value))
}


const handleFilter = (e) =>{
  dispatch(filterCards(e.target.value))
}

useEffect(()=>{
  dispatch(oderCards("Ascendente"))
},[])

  return (
    <>
<div className={s.divSelect}>
    <select onChange={handleSelect}>
  <option value="Ascendente">Ascendente</option>
  <option value="Descendente">Descendente</option>
  </select>
  <select onChange={handleFilter}>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Genderless">Genderless</option>
  <option value="unknown">unknown</option>
  </select>

</div>
    <div className={s.divcards}>
   {myFavorites.map((x)=>(<Card key={x.id} id={x.id} name={x.name} species={x.species} gender={x.gender} image={x.image} />))}
   </div>

   </>
  )
}





export default Favorites
