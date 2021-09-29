const express = require('express');
const session = require('express-session');
const router = require('./routes');
const sequelize = require('./db/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { urlencoded } = require('body-parser');



const PORT = 3000;

const app = express();
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(router);
sequalize.sync({force:false}).then(app.listen(PORT));
console.log(`listening on ${PORT}`);