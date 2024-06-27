// Sample data for games. 
// Note: The real api application will store data to a database instead of temporary variable
let games = [
    {
        "id": 582,
        "title": "Tarisland",
        "thumbnail": "https://www.freetogame.com/g/582/thumbnail.jpg",
        "short_description": "A cross-platform MMORPG developed by Level Infinite and Published by Tencent.",
        "game_url": "https://www.freetogame.com/open/tarisland",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Tencent",
        "developer": "Level Infinite",
        "release_date": "2024-06-22",
        "freetogame_profile_url": "https://www.freetogame.com/tarisland"
    },
    {
        "id": 540,
        "title": "Overwatch 2",
        "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
        "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
        "game_url": "https://www.freetogame.com/open/overwatch-2",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Activision Blizzard",
        "developer": "Blizzard Entertainment",
        "release_date": "2022-10-04",
        "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
    }
];

class GamesService {
    constructor() {
        this.games = games;
    }

    getGames() {
        return this.games;
    }

    createGame(game) {
        this.games.push(game);
    }
    
    deleteGame(gameId) {
        this.games = this.games.filter(game => game.id != gameId);
    }
}

module.exports = GamesService;