const router = require('./routes/index')
const express = require("express");
const server = express();
const PORT = 3002;
const cors = require('cors');
const {sequelize,Character} = require('./DB_connection');
const{saveApiData} = require('./controllers/saveApiData')

server.use(cors());
server.use(express.json());
server.use('/rickandmorty', router);
server.listen(PORT,async()=>{

    try {
        await sequelize.sync({force:true})
        await saveApiData(Character);
        
       

       
        console.log('Server raised in port ' + PORT);
        
      }catch (error) {
        
    }
    
    
    
    
})
    
   
   

module.exports = server;