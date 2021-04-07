const express = require('express');

const GameService = require('../../game/services/GameService');

let type;
let gameCount;
let objectiveCount;

const MatchService = {
    generateMatch(params, games) {
        GameService.type = params.type;
        gameCount = params.gameCount;
        objectiveCount = params.golfGoalCount;

        return GameService.chooseRandomGames(games, gameCount, objectiveCount);
    }
}

module.exports = MatchService;
