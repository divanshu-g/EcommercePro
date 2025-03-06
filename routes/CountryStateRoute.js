const express = require('express');
const router = express.Router();
const countryStateController = require('../controllers/countryStateController');

// Get all country states
router.get('/', countryStateController.getAllCountryStates);

// Get a single country state by ID
router.get('/:id', countryStateController.getCountryStateById);

// Create a new country state
router.post('/', countryStateController.createCountryState);

// Update a country state by ID
router.put('/:id', countryStateController.updateCountryState);

// Delete a country state by ID
router.delete('/:id', countryStateController.deleteCountryState);

module.exports = router;
