
const URL= 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');
const getCharDetail = (req, res)=>{
    
    const params = req.params.id;
    console.log(params)
    let character = {}
    axios.get(URL+params)
    .then(response=>response.data)
    .then(data=> {
        character = {image:data.image, name:data.name, gender:data.gender,status:data.status, origin:data.origin ,species:data.species};
        //res.writeHead(200,{"Content-Type": "application/json"})
        res.status(200).send(character);
    })
    .catch(err=>{
        //res.writeHead(500,{"Content-Type": "text/plain"})
        res.status(500).send(err.message)
    })
}


module.exports= getCharDetail;