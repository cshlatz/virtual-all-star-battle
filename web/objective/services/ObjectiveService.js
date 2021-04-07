const Objective = require('../models/Objective');

const ObjectiveService = {

    async getObjectives() {
        return Objective.find();
    },

    async createObjective(data) {
        Objective.create({objective: data.objective, game_id: data.game_id, par: data.par, score: data.score}, function(err) {
            if (err) {
                console.log(err);
            }
        });
    },

    async updateObjective(data) {
        Objective.update({game_id: data.game_id}, data, {}, function(err) {
            if (err) console.log(err);
        });
    },

    async deleteObjective(id) {
        Objective.deleteOne({game_id: id}, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
}

module.exports = ObjectiveService;
