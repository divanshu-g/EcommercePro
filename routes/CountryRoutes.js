const express = require('express');
const router = express.Router();
const countryController = require('../controllers/CountryController');

// Create a new country
router.post('/', countryController.create);

// Get all countries
router.get('/', countryController.findAll);

// Get a country by ID
router.get('/:id', countryController.findOne);

// Update a country by ID
router.put('/:id', countryController.update);

// Delete a country by ID
router.delete('/:id', countryController.delete);

module.exports = router;
