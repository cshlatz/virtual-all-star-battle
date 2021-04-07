const Game = require('../models/Game');

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const getGames = (query) => {
    const games = Game.find(query).lean().populate('objectives').lean().exec();
    return games;
}

const GAME_TYPES = {
    SCORE: 'score',
    GOLF: 'golf',
    BINGO: 'bingo'
}

const GameService = {

    type: GAME_TYPES.GOLF,

    /**
     * Retrieve all games
     *
     * @return array
     */
    async getAllGames() {
        const games = Game.find().lean().populate('objectives').lean().exec();
        return games;
    },

    async createGame(data) {
        Game.create({name: data.name, game_id: data.game_id, year_made: data.year_made}, function(err) {
            if (err) {
                console.log(err);
            }
        });
    },

    async updateGame(data) {
        Game.update({game_id: data.game_id}, data, {}, function(err) {
            if (err) console.log(err);
        });
    },

    async deleteGame(id) {
        Game.deleteOne({game_id: id}, function(err) {
            if (err) {
                console.log(err);
            }
        });
    },

    /**
     * Choose random games given a list
     *
     * @param array games - the array of games to choose from
     * @param number gameCount - the number of games to select. Will return all games if the count is larger than the list
     * @param number objectiveCount - the number of objectives that can be objective goals, IE, not a score goal
     * @param bool pop - remove game from list so it can't be chosen again
     *
     * @return array
     */
    chooseRandomGames(games, gameCount, objectiveCount, pop = true) {
        let randomlySelectedGames = [];

        if (gameCount > games.length) {
            return games;
        }

        games = shuffle(games);

        for (i = 0; i < gameCount; i++) {
            if (pop) {
                let game = games.pop();
                let objective = {};
                if (this.type === GAME_TYPES.GOLF) {
                    objective = this.chooseRandomObjective(game, objectiveCount > 0 ? false : true);
                    if (objectiveCount > 0) {
                        objectiveCount--;
                    }
                } else if (this.type === GAME_TYPES.SCORE) {
                    objective.objective = 'Get a high score';
                }
                randomlySelectedGames.push({id: i, game: game.name, objective: objective.objective, par: objective.par});
            } else {
                randomlySelectedGames.push(games[i]);
            }
        }

        return randomlySelectedGames
    },

    /**
     * Choose random objectives for a given game
     *
     * @param object game - the game to get an objective for
     * @param bool score - whether or not we should find a score goal
     *
     * @return object
     */
    chooseRandomObjective(game, score) {
        game.objectives = game.objectives.filter(objective => objective.score === (score ? true : false));
        game.objectives = shuffle(game.objectives);
        return game.objectives.pop();
    }
}

module.exports = GameService;
