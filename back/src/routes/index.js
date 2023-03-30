const express = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const getAllChars = require('../controllers/getAllChars');
const {Favorite} = require('../DB_connection');

const router = express.Router();

router.get('/all', getAllChars);
router.get("/detail/:id", getCharDetail);
router.get("/onsearch/:id", getCharById);
router.post("/fav", async(req, res) => {

  try {

    const{id, name, species, gender, image, status, origin} = req.body 
    if(id && name && status && species && gender && image && origin){
      
      const result = await Favorite.create({name, species, gender, image, status, origin})
      await result.setCharacter(id)
      
      res.status(200).json(result);
   }
    else res.status(500).json({error: "problems with body"})
    
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

router.get("/fav", async(req, res) => {
  try {
    const result = await Favorite.findAll();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({error:error.message})
  }
  
});


router.delete("/fav/:id", async(req, res) => {
  try {

    const params = req.params.id;
     await Favorite.destroy({
      where:{CharacterId: Number(params)}
    })
   res.status(200).json({id:Number(params)});
    
  } catch (error) {
    res.status(500).json({error: error.message});
  }
 

});

module.exports = router;
