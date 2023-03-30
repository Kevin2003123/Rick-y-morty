import axios from "axios";

export const addPj = (pj) => {
  const { name, id, species, gender, image, origin,status } = pj;
  console.log(pj);
  try {

   
    return async (dispatch) => {
     
      const { data } = await axios.post(
        "http://localhost:3002/rickandmorty/fav",
        { name, id, species, gender, image, origin, status }
      );

      
      return dispatch({
        type: "ADD_PJ",
        payload: {id: data.CharacterId, name:data.name, species: data.species, gender: data.gender, image: data.image, origin: data.origin, status: data.status} ,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePj = (id) => {
 
 try{
  return async (dispatch) => {
     const {data} =await axios.delete(
      `http://localhost:3002/rickandmorty/fav/${id}`,
    );
    console.log(data.id)
    return dispatch({
      type: "DELETE_PJ",
      payload: data.id,
    });
  };
} catch (error) {
  console.log(error.message);
}
};

export const getPj = () =>{
try {
  return async (dispatch) => {
    const {data} = await axios("http://localhost:3002/rickandmorty/fav")
    return dispatch({
      type: "GET_PJ",
      payload: data.map(data=>{
return {id: data.CharacterId, name:data.name, species: data.species, gender: data.gender, image: data.image, origin: data.origin, status: data.status}
      })
      
      
      
    })
  }
  
} catch (error) {
  console.log(error.message);
}

}

export const filterCards = (status, order) => {
  return {
    type: "FILTER",
    payload: { status, order },
  };
};

export const oderCards = (id) => {
  return {
    type: "ORDER",
    payload: id,
  };
  
};
