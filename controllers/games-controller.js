class GamesController {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }

    getGames(req, res) {
        const games = this.gamesService.getGames();
        //res.status(200).json(games);
        
        if(req.query.genre) {
            const filteredGames = games.filter(game => game.genre == req.query.genre);
            res.status(200).json(filteredGames);    
        }
        else
            res.status(200).json(games);
    }

    getGameById(req, res) {
        const gameId = req.params.id;
        const game = this.gamesService.getGameById(gameId);
        res.status(200).json(game);
    }

    createGame(req, res) {
        const game = req.body;
        const response = this.gamesService.createGame(game);
        res.status(200).json({"actionStatus": "created"});
    }

    updateGame(req, res) {
        const game = req.body;
        const response = this.gamesService.updateGame(game);
        res.status(200).json({"actionStatus": "updated"});
    }

    deleteGame(req, res) {
        const gameId = req.params.id;
        this.gamesService.deleteGame(gameId);
        res.status(200).json({"actionStatus": "deleted"});
    }
}

module.exports = GamesController;