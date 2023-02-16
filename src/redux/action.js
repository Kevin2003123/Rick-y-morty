




const addPj = (pj)=>{
    return{
        type: "ADD_PJ",
        payload: pj
    }
}

const deletePj = (id) =>{
    return{
        type: "DELETE_PJ",
        payload: id
    }
}

const filterCards = (status) =>{
    return{
        type:"FILTER",
        payload: status
    }
}


const oderCards = (id) =>{
    return{
        type:"ORDER",
        payload: id
    }
}




module.exports= {
    addPj,
    deletePj,
    filterCards,
    oderCards
}