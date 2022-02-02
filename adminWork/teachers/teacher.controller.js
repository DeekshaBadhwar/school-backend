const db = require('_helpers/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config=require('../../config.json')

module.exports = 
{     
    createTeacher,
    login
};

//login as teacher
async function login({ email, password }) {
    console.log(email,"email")
    const teacher = await db.Teacher.scope('withHash').findOne({ where: { email } });

    if (!teacher  || !(await bcrypt.compare(password, teacher.passwordHash))) {
        throw 'Email or password is incorrect';
    }

    
    // authentication successful so generate jwt and refresh tokens
    const jwtToken = generateJwtToken(teacher);
    // const refreshToken = generateRefreshToken(teacher, ipAddress);

    // save refresh token
    // await refreshToken.save();

    // return basic details and tokens
    return {
        role:"Teacher",
        jwtToken,
        // refreshToken: refreshToken.token
    };
}
function generateJwtToken(account) {
    // create a jwt token containing the account id that expires in 15 minutes
    return jwt.sign({ sub: account.id, id: account.id }, config.secret, { expiresIn: '15m' });
}


//create 
async function createTeacher(body) {
    
    const details={
        email:body.email ,
        firstName: body.firstName,
        lastName: body.lastName,
        qualification:body.qualification,
        phoneNo:body.phoneNo,
        experience:body.experience,
        permanentAddress:body.permanentAddress ,
        // profilePicture:body.file.path,
        passwordHash:body.password
       }
console.log(details)
const teacher= await db.Teacher.create(details)    
teacher.passwordHash = await hash(body.password);

//save teacher
await teacher.save();
 


    if(!teacher)
    {
        return "teacher not added"
    }
    return teacher
}
//hashing the password
async function hash(password) {
    return await bcrypt.hash(password, 10);
}

