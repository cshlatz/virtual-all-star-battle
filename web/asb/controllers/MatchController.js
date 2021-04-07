const express = require('express');
const GameService = require('../../game/services/GameService');
const MatchService = require('../services/MatchService');

const MatchController = {
    async generate (req, res) {
        const games = await GameService.getAllGames();
        res.send(MatchService.generateMatch(req.query, games));
    }
}

module.exports = MatchController;
