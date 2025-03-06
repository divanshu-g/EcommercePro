const express = require('express');
const router = express.Router();
const statesController = require('../controllers/StateController');

// Define routes
router.get('/', statesController.getAllStates);
router.get('/:id', statesController.getStateById);
router.post('/', statesController.createState);
router.put('/:id', statesController.updateState);
router.delete('/:id', statesController.deleteState);

module.exports = router;
