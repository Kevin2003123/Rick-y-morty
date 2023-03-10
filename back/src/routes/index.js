const express = require('express');
const getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDetail');
let fav = require('../utils/favs');
const router = express.Router();

router.get('/detail/:id', getCharDetail);
router.get('/onsearch/:id', getCharById);
router.post('/fav' ,(req,res)=>{
    fav.push(req.body)
})
router.get('/fav' , (req, res)=>{
    res.status(200).send(fav);
})
router.delete('/fav/:id', (req, res)=>{
    const params = req.params.id;
    fav= fav.filter(x=>x.id!= params)
})

module.exports = router;