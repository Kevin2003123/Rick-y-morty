
const fetch = require('node-fetch').default

const getCharById = (res, ID) =>{
    let character = {}

    fetch(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(response=>response.json())
    .then(data=> {
        character = {id: data.id ,image: data.image, name:data.name, gender:data.gender, species:data.species};
        res.writeHead(200,{"Content-Type": "application/json"})
        res.end(JSON.stringify(character));
    })
    .catch(err=>{
        res.writeHead(500,{"Content-Type": "text/plain"})
        res.end(err.message)
    })
}
    



module.exports = getCharById;
