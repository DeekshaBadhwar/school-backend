const db = require('_helpers/db');

module.exports = 
{     
    createStudent
};

//create bytt project object
async function createStudent(body) {
    const details={
        email:body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        mothersName: body.mothersName,
        fathersName: body.fathersName,
        phoneNo:body.phoneNo,
        permanentAddress: body.permanentAddress,

    }
  
    
 const student= await db.Students.create(details)    
    if(!student)
    {
        return "values not added"
    }
    return student
}