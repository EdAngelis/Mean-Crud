    'use strict'

const employees = require('../models/employee')

const employeeConrl = {}




employeeConrl.getEmployees = async (req, res, next) => {
    const empregados = await employees.find()
    res.json(empregados)
}

employeeConrl.getByIdEmployees = async (req, res, next)=> {
    const empregados = await employees.findById(req.params.id)
    res.json(empregados)
}

employeeConrl.postEmployees = async (req, res, next) => {
    const empregado = new employees (req.body)
    await empregado.save()
    res.json('Dados Salvos no BD')
}

employeeConrl.putEmployees = async (req, res, next)=> {
    const empregado = { 
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary
    }
    await employees.findByIdAndUpdate(req.params.id, {$set:empregado},{new:true})
    res.json({status: 'Empregado Atualizado'})
   
}

employeeConrl.deleteEmployees = async (req, res, nest)=> {
    await employees.findByIdAndRemove(req.params.id)
    res.json({status: ' Empregado removido'})
}


module.exports = employeeConrl

