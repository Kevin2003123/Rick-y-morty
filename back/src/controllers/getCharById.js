const axios = require('axios');
const URL= 'https://rickandmortyapi.com/api/character/';


const getCharById = (req, res) =>{
    let character ={};
    const params = req.params.id;
    axios.get(URL+params)
    .then((response)=>response.data)
    .then((data)=>{
        character ={id: data.id,name:data.name, species: data.species, image: data.image, gender: data.gender};
        res.status(200).send(character);
    }).catch((err)=>{
        res.status(500).send(err.message);
    })

}


module.exports = getCharById;
