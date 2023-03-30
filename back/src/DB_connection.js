require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const character = require('./models/Character');
const favorite = require('./models/Favorite');
const{saveApiData} = require('./controllers/saveApiData')
/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`, {logging: false, native: false });

/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/

character(sequelize);
favorite(sequelize);

const{Character, Favorite} = sequelize.models;

Character.hasOne(Favorite); // A HasOne B
Favorite.belongsTo(Character)
//console.log({...sequelize.models})

module.exports = {
   ...sequelize.models,
   sequelize,
};
