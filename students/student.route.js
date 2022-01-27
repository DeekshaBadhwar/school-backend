const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')

const studentController = require('./byt.service');

module.exports=router;
router.post('/students',createStudent)

//create students
async function createStudent(req, res, next) {
  
    await studentController.createStudent(req.body)
        .then(data => res.json({data}))
        .catch(next);
}