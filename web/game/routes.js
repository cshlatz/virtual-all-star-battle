const express = require('express');
const router = express.Router();
const GameController = require('./controllers/GameController');
const Game = require('./models/Game');
const Objective = require('../objective/models/Objective');
const Middleware = require('../middleware/Authenticate');

// Authentication middleware
/*
router.use(function (req, res, next) {
    Middleware.authenticatePassword(req, res, next);
});
*/

router.get('/', GameController.getGames);
router.post('/', GameController.createGame);
router.get('/:id?', async (req, res) => {
    const game = await Game.findOne({ game_id: req.params.id });
    res.send(game);
});
router.put('/:id?', GameController.updateGame);
router.delete('/:id?', GameController.deleteGame);
router.get('/:id?/objectives', async (req, res) => {
    const game = await Game.findOne({ game_id: req.params.id });
    const objectives = await Objective.find({ game_id: req.params.id });
    res.send(objectives);
});
router.get('/objectives', async (req, res) => {
    const objectives = await Objective.find();
    console.log('get objectives');
    console.log(objectives);
    res.send(objectives);
});

module.exports = router;
