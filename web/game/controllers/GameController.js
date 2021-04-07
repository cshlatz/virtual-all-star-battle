const express = require('express');

const GameService = require('../../game/services/GameService');


const GameController = {
    async getGames (req, res) {
        const result = await GameService.getAllGames();
        res.send(result);
    },

    async deleteGame (req, res) {
        const result = await GameService.deleteGame(req.params.id);
        res.send(result);
    },

    async createGame (req, res) {
        if (Object.keys(req.body).length === 0) {
            res.sendStatus(400);
            return;
        }
        const result = await GameService.createGame(req.body);
        res.send(result);
    },

    async updateGame (req, res) {
        const result = await GameService.updateGame(req.body);
        res.send(result);
    }

}

module.exports = GameController;
