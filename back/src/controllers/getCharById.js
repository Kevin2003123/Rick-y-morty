const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    let character = {};
    const params = req.params.id;
    const result = await axios.get(URL + params);
    const data = result.data;
    character = {
      id: data.id,
      name: data.name,
      species: data.species,
      image: data.image,
      gender: data.gender,
    };

    res.status(200).json(character);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};

module.exports = getCharById;
