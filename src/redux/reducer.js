const initialState = {
    myFavorites:[],
    allCharacters:[]
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case "ADD_PJ":
    return { ...state, allCharacters: [...state.allCharacters, payload] ,myFavorites:[...state.myFavorites, payload]}
    case "DELETE_PJ":
        return {...state, myFavorites: [...state.myFavorites].filter((x)=>x.id !== payload)}
    case "FILTER":
      return {...state, allCharacters:[...state.myFavorites].filter((x)=>x.gender===payload)}
    case "ORDER":
      return {...state, allCharacters: payload==="Ascendente"?[...state.myFavorites].sort((a,b)=>a.id-b.id): [...state.myFavorites].sort((a,b)=>b.id-a.id) }
  default:
    return state
  }
}


export default rootReducer;