const express = require('express')
const app = express()
app.use(express.json());

const port = 3000;

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

//Get games
app.get('/games', (req, res) => {
    console.log(req.query);
    if(req.query.genre) {
        const filteredGames = games.filter(game => game.genre == req.query.genre);
        res.status(200).json(filteredGames);    
    }
    else
        res.status(200).json(games);
})

//Create a game
app.post('/games', (req, res) => {
    console.log(req.body);
    const game = req.body;
    games.push(game);
    res.status(200).json(game);
});

//Delete a game
app.delete('/games/:id', (req, res) => {
    games = games.filter(game => game.id != req.params.id);
    res.status(200).json({message : 'deleted'});
})

//Start Web Server
app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
})
