import axios from "axios";


export const addPj = (pj)=>{
    axios.post('http://localhost:3002/rickandmorty/fav',{...pj})
    return{
        type: "ADD_PJ",
        payload: pj
    }
}

export const deletePj = (id) =>{
    axios.delete(`http://localhost:3002/rickandmorty/fav/${id}`)
    return{
        type: "DELETE_PJ",
        payload: id
    }
}

export const filterCards = (status,order) =>{
    return{
        type:"FILTER",
        payload: {status,order}
    }
}


export const oderCards = (id) =>{
    return{
        type:"ORDER",
        payload: id
    }
}




