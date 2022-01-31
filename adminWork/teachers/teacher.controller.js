const db = require('_helpers/db');

module.exports = 
{     
    createTeacher
};

//create 
async function createTeacher(body) {
    console.log(body,"ll")
    const details={
        email:body.email ,
        firstName: body.firstName,
        lastName: body.lastName,
        qualification:body.qualification,
        phoneNo:body.phoneNo,
        experience:body.experience,
        permanentAddress:body.permanentAddress ,
        profilePicture:body.file.path
       }
console.log(details)
const teacher= await db.Teacher.create(details)    

    if(!teacher)
    {
        return "teacher not added"
    }
    return teacher
}