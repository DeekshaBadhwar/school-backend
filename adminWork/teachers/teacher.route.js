const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')

const Role = require('_helpers/role');

const teacherController = require('./teacher.controller');

module.exports=router;
router.post('/teacher',authorize(Role.Admin),createTeacher)

//create teacher
async function createTeacher(req, res, next) {
    console.log(req,"pp")
  
    await teacherController.createTeacher(req.body)
        .then(data => res.json({data}))
        .catch(next);
}