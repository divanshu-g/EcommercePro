const express = require('express');
const router = express.Router();
const deptDesigController = require('../controllers/DepartmentDesignController');

router.get('/', deptDesigController.getAllDeptDesigs);
router.get('/:id', deptDesigController.getDeptDesigById);
router.post('/', deptDesigController.createDeptDesig);
router.put('/:id', deptDesigController.updateDeptDesig);
router.delete('/:id', deptDesigController.deleteDeptDesig);

module.exports = router;
