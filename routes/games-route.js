const express = require('express');
const GamesController = require("../controllers/games-controller.js");
const GamesService = require("../services/games-service.js");

const router = express.Router();
const gamesService = new GamesService(); //Singleton
const gamesController = new GamesController(gamesService);  //Singleton

router.get("/", (req, res) => {
    gamesController.getGames(req, res);
});

router.post('/', (req, res) => {
    gamesController.createGame(req, res);
});

router.delete('/:id', (req, res) => {
    gamesController.deleteGame(req, res);
});

module.exports = router;