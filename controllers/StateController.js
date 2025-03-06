const { States } = require('../models/State');

// Get all states
const getAllStates = async (req, res) => {
    try {
        const states = await States.findAll();
        res.status(200).json(states);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch states' });
    }
};

// Get a state by ID
const getStateById = async (req, res) => {
    try {
        const { id } = req.params;
        const state = await States.findByPk(id);
        if (!state) {
            return res.status(404).json({ error: 'State not found' });
        }
        res.status(200).json(state);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch state' });
    }
};

// Create a new state
const createState = async (req, res) => {
    try {
        const { stateid, stateName } = req.body;
        const newState = await States.create({ stateid, stateName });
        res.status(201).json(newState);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create state' });
    }
};

// Update a state
const updateState = async (req, res) => {
    try {
        const { id } = req.params;
        const { stateName } = req.body;

        const state = await States.findByPk(id);
        if (!state) {
            return res.status(404).json({ error: 'State not found' });
        }

        await state.update({ stateName });
        res.status(200).json(state);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update state' });
    }
};

// Delete a state
const deleteState = async (req, res) => {
    try {
        const { id } = req.params;
        const state = await States.findByPk(id);
        if (!state) {
            return res.status(404).json({ error: 'State not found' });
        }

        await state.destroy();
        res.status(200).json({ message: 'State deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete state' });
    }
};

module.exports = { getAllStates, getStateById, createState, updateState, deleteState };
