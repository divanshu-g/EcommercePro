const Dept_Desig = require('../models/DepartmentDesign');

// Get all Dept_Desig records
const getAllDeptDesigs = async (req, res) => {
    try {
        const deptDesigs = await Dept_Desig.findAll();
        res.status(200).json(deptDesigs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data', details: error.message });
    }
};

// Get a single Dept_Desig record by ID
const getDeptDesigById = async (req, res) => {
    try {
        const { id } = req.params;
        const deptDesig = await Dept_Desig.findByPk(id);
        if (!deptDesig) {
            return res.status(404).json({ error: 'Dept_Desig not found' });
        }
        res.status(200).json(deptDesig);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data', details: error.message });
    }
};

// Create a new Dept_Desig record
const createDeptDesig = async (req, res) => {
    try {
        const { deptid, desigid } = req.body;
        if (!deptid || !desigid) {
            return res.status(400).json({ error: 'deptid and desigid are required' });
        }

        const newDeptDesig = await Dept_Desig.create({ deptid, desigid });
        res.status(201).json(newDeptDesig);
    } catch (error) {
        res.status(500).json({ error: 'Error creating record', details: error.message });
    }
};

// Update a Dept_Desig record
const updateDeptDesig = async (req, res) => {
    try {
        const { id } = req.params;
        const { deptid, desigid } = req.body;

        const deptDesig = await Dept_Desig.findByPk(id);
        if (!deptDesig) {
            return res.status(404).json({ error: 'Dept_Desig not found' });
        }

        await deptDesig.update({ deptid, desigid });
        res.status(200).json(deptDesig);
    } catch (error) {
        res.status(500).json({ error: 'Error updating record', details: error.message });
    }
};

// Delete a Dept_Desig record
const deleteDeptDesig = async (req, res) => {
    try {
        const { id } = req.params;
        const deptDesig = await Dept_Desig.findByPk(id);
        if (!deptDesig) {
            return res.status(404).json({ error: 'Dept_Desig not found' });
        }

        await deptDesig.destroy();
        res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting record', details: error.message });
    }
};

module.exports = {
    getAllDeptDesigs,
    getDeptDesigById,
    createDeptDesig,
    updateDeptDesig,
    deleteDeptDesig
};
