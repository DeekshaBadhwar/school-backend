const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')

const Role = require('_helpers/role');

const teacherController = require('./teacher.controller');
const upload =require('../../_helpers/multer')
module.exports=router;
router.post('/teacher',authorize(Role.Admin),upload.single("profilePicture"),createTeacher)
//login teacher

router.post('/login',  loginSchema,login);

//create teacher
async function createTeacher(req, res, next) {
   console.log(req.body)
  
    await teacherController.createTeacher(req.body)
        .then(data => res.json({data}))
        .catch(next);
}

//login
function loginSchema(req, res, next) {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function login(req, res, next) {
    const { email, password } = req.body;
    // const ipAddress = req.ip;
    teacherController.login({ email, password})
        .then(({  ...teacher }) => {
            // setTokenCookie(res, refreshToken);
            res.json(teacher);
        })
        .catch(next);
}