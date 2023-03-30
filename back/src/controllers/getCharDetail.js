const {Character} = require('../DB_connection');


const getCharDetail = async(req, res)=>{
  try {
    const params = req.params.id;
 
    const result = await Character.findByPk(Number(params));

    

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
}


module.exports= getCharDetail;