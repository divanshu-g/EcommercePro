const Department = require('../models/Departments');

// Get all departments
exports.getDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single department by ID
exports.getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.status(200).json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new department
exports.createDepartment = async (req, res) => {
    try {
        const { dname } = req.body;
        const newDepartment = await Department.create({ dname });
        res.status(201).json(newDepartment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a department by ID
exports.updateDepartment = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        await department.update(req.body);
        res.status(200).json(department);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a department by ID
exports.deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        await department.destroy();
        res.status(200).json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
