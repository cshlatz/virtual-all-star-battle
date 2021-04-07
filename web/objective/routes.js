const express = require('express');
const router = express.Router();
const Objective = require('./models/Objective');
const ObjectiveController = require('./controllers/ObjectiveController');

router.get('/', ObjectiveController.getObjectives);
router.post('/', ObjectiveController.createObjective);
router.put('/:id?', ObjectiveController.updateObjective);
router.delete('/:id?', ObjectiveController.deleteObjective);

module.exports = router;
