//Require packages
const express = require('express');


const app = express();
const { PORT, DB_CONNECTION_STRING } = require('./constants');
const routes = require('./routes')

//Setup configurations
require('./configurations/expressConfig')(app, express); //express
const mongoDbConnection = require('./configurations/mongooseConfig'); //mongoose
require('./configurations/handlebarsConfig')(app); //handlebars

//Setup the router
app.use(routes);

//Start sequence
//Making sure we have a DB connection before letting anyone interact with the service
mongoDbConnection(DB_CONNECTION_STRING).then(() => {
    console.log(`Connected to DB at`, DB_CONNECTION_STRING);
    //Start the server on DB connection
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`);
    })
    })
    .catch(err => console.error('Cannot connect to database: ', err));
