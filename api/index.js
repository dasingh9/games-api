const express = require('express')
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const gamesRoute = require("./routes/games-route.js")

const swaggerDocument = require('./swagger.json');

const app = express()
app.use(express.json());
app.use(cors());
app.use(
 '/api-docs',
 swaggerUi.serve,
 swaggerUi.setup(swaggerDocument)
);
app.use('/', express.static('public'));


app.use("/api/games", gamesRoute);

//Start Web Server
const port = 3001;
app.listen(port, () => {
 console.log(`My example app listening at http://localhost:${port}`);
})

module.exports = app;