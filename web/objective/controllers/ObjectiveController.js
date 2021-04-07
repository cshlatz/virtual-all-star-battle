const express = require('express');

const ObjectiveService = require('../services/ObjectiveService');

const ObjectiveController = {
    async getObjectives (req, res) {
        const result = await ObjectiveService.getObjectives();
        res.send(result);
    },

    async createObjective (req, res) {
        if (Object.keys(req.body).length === 0) {
            res.sendStatus(400);
            return;
        }
        const result = await ObjectiveService.createObjective(req.body);
        res.send(result);
    },

    async updateObjective (req, res) {
        const result = await ObjectiveService.updateObjective(req.body);
        res.send(result);
    },

    async deleteObjective (req, res) {
        const result = await ObjectiveService.deleteObjective(req.body);
        res.send(result);
    }

}

module.exports = ObjectiveController;
