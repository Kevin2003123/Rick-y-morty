import './App.css'

import Cards from './components/Cards.jsx'

//import characters, { Rick } from './data.js'
//import s from "./App.module.css"
import Nav from "./components/Nav/Nav.jsx"
import React,{useState, useEffect} from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import About from "./components/About/About.jsx"
import Detail from './components/Detail/Detail.jsx';
import Login from "./components/Form/Form.jsx";
import Favorites from './components/Favoritos/Favorites'
import { connect } from 'react-redux'
import { deletePj } from './redux/action'

function App ({deletePj}) {

  const [characters, setCharacters] = useState([])
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'kevinreyes005@gmail.com';
  const password = 'carta14123';

  function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }else{
      window.alert("Acceso no valido")
   }
}

  function onSearch(character) {
    fetch(`http://localhost:3002/rickandmorty/onsearch/${character}`)
       .then((response) => response.json())
       .then((data) => {
         console.log(data.status);
          if (data.name) {
             setCharacters((oldChars) => [...oldChars].some((x)=>x.id=== data.id)? [...oldChars] : [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = async(id) =>{
  
    setCharacters([...characters].filter((x)=> x.id !== id))
    deletePj(id);
    
    
 }


 useEffect(() => {
   !access && navigate('/');
}, [access]);


  return (
    <div className={`App`} style={{ padding: '25px' }}>
    
      <div>
      <Nav onSearch={onSearch}/>
       
      </div>
   <Routes>
  
   <Route  path='/home' element={ <Cards characters={characters} onClose={onClose}/>}/>
      
      <Route  path="/about" element={<About/>}/>
      
      <Route  path="/detail/:detailId" element={<Detail/>}/>
      <Route  path='/favorites' element={<Favorites/>}/>
      <Route exact path='/' element={<Login log={login}/>} />
      </Routes>
      
    </div>
  )
}

export const mapDispatchToProps = (dispatch) =>{
   return{
       deletePj: (id) => dispatch(deletePj(id))
}
}

export default connect(null,mapDispatchToProps)(App)
