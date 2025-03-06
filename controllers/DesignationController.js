const Designations = require('../models/Designation');

// Create a new designation
exports.createDesignation = async (req, res) => {
    try {
        const { desigName } = req.body;
        const designation = await Designations.create({ desigName });
        res.status(201).json(designation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all designations
exports.getAllDesignations = async (req, res) => {
    try {
        const designations = await Designations.findAll();
        res.status(200).json(designations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a designation by ID
exports.getDesignationById = async (req, res) => {
    try {
        const { id } = req.params;
        const designation = await Designations.findByPk(id);
        if (!designation) {
            return res.status(404).json({ message: 'Designation not found' });
        }
        res.status(200).json(designation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a designation
exports.updateDesignation = async (req, res) => {
    try {
        const { id } = req.params;
        const { desigName } = req.body;

        const designation = await Designations.findByPk(id);
        if (!designation) {
            return res.status(404).json({ message: 'Designation not found' });
        }

        designation.desigName = desigName;
        await designation.save();

        res.status(200).json(designation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a designation
exports.deleteDesignation = async (req, res) => {
    try {
        const { id } = req.params;

        const designation = await Designations.findByPk(id);
        if (!designation) {
            return res.status(404).json({ message: 'Designation not found' });
        }

        await designation.destroy();
        res.status(200).json({ message: 'Designation deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
