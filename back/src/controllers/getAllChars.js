const {Character} = require('../DB_connection')

const getAllChars = async(req, res) =>{

    try {

        const result= await Character.findAll();
        res.status(200).json(result);
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = getAllChars;