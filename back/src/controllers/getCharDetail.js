
const fetch = require('node-fetch').default
const getCharDetail = (res, ID)=>{
    let character = {}

    fetch(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(response=>response.json())
    .then(data=> {
        character = {image:data.image, name:data.name, gender:data.gender,status:data.status, origin:data.origin ,species:data.species};
        res.writeHead(200,{"Content-Type": "application/json"})
        res.end(JSON.stringify(character));
    })
    .catch(err=>{
        res.writeHead(500,{"Content-Type": "text/plain"})
        res.end(err.message)
    })
}


module.exports= getCharDetail;