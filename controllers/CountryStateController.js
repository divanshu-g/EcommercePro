const CountryState = require('../models/CountryState');

// Get all country states
exports.getAllCountryStates = async (req, res) => {
    try {
        const countryState = await CountryState.find();
        res.status(200).json(countryState);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single country state by ID
exports.getCountryStateById = async (req, res) => {
    try {
        const countryState = await CountryState.findById(req.params.id);
        if (!countryState) {
            return res.status(404).json({ message: 'Country state not found' });
        }
        res.status(200).json(countryState);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new country state
exports.createCountryState = async (req, res) => {
    const countryState = new CountryState(req.body);
    try {
        const newCountryState = await countryState.save();
        res.status(201).json(newCountryState);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a country state by ID
exports.updateCountryState = async (req, res) => {
    try {
        const updatedCountryState = await CountryState.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCountryState) {
            return res.status(404).json({ message: 'Country state not found' });
        }
        res.status(200).json(updatedCountryState);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a country state by ID
exports.deleteCountryState = async (req, res) => {
    try {
        const deletedCountryState = await CountryState.findByIdAndDelete(req.params.id);
        if (!deletedCountryState) {
            return res.status(404).json({ message: 'Country state not found' });
        }
        res.status(200).json({ message: 'Country state deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
