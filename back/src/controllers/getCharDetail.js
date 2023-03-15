
const URL= 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');
const getCharDetail = async(req, res)=>{
  try {
    const params = req.params.id;
    let character = {};
    const result = await axios.get(URL + params);

    const data = result.data;
    character = {
      image: data.image,
      name: data.name,
      gender: data.gender,
      status: data.status,
      origin: data.origin,
      species: data.species,
    };

    res.status(200).json(character);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
}


module.exports= getCharDetail;