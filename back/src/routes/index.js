const express = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
let fav = require("../utils/favs");
const router = express.Router();

router.get("/detail/:id", getCharDetail);
router.get("/onsearch/:id", getCharById);
router.post("/fav", (req, res) => {
  const{id, name, species, gender, image} = req.body 
  if(id && name && species && gender && image){res.status(200).json(req.body);
  fav.push(req.body);}
  else res.status(500).json({error: "problems"})
});
router.get("/fav", (req, res) => {
  res.status(200).send(fav);
});
router.delete("/fav/:id", (req, res) => {
  const params = req.params.id;
  const character =  fav.find(x=> x.id === Number(params))
  console.log(character);
  if(character){
    res.status(200).json(character)
    fav = fav.filter((x) => x.id != params);
  }else{
    res.status(404).json({error: "not found"})
  }
 

});

module.exports = router;
