const axios = require('axios');
//const {Character} = require('../DB_connection');

//var allCharacter= [];
const getApiData = async()=>{

    let arr =[];
    for(let i = 1; i<=100; i++){
        arr.push(i);
    }
    try {
        const characters = await axios.get(`https://rickandmortyapi.com/api/character/${arr}`);
       
        const res = characters.data.map(x=>{
            const{id,name,species,status,origin,gender,image}= x;
            return {name,species,status,origin: origin.name,gender,image}
        })
        //console.log(res);
        return res;
      
        //res.status(200).json({id,name,species,status,origin: origin.name,gender,image})
    } catch (error) {
        throw new Error( error.message);
    }
   


}

const saveApiData =async(model)=>{
    try {
        let characters = await getApiData();
//console.log(characters)
        //console.log(characters)
        //characters = characters[1]

    
     await model.bulkCreate(characters);
   // res.status(200).json(result);
        
        
    } catch (error) {
       throw new Error(error.message);
       //res.status(400).json({error: error.message})
    }
  

}

module.exports={saveApiData};





