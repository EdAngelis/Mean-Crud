'use strict'

const employeeCtrl = require('../controllers/employeeControllers')
const router = require('express').Router();

router.get('/:id', employeeCtrl.getByIdEmployees);
router.get('/', employeeCtrl.getEmployees);
router.post('/', employeeCtrl.postEmployees);
router.put('/:id', employeeCtrl.putEmployees);
router.delete('/:id', employeeCtrl.deleteEmployees);



module.exports = router; 