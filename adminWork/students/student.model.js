const { DataTypes } = require('sequelize');

module.exports = modelbyt;

function modelbyt(sequelize) {
    const attributes = {
        id: { type: DataTypes.INTEGER,autoIncrement:true ,primaryKey:true},
        email: { type: DataTypes.STRING, allowNull: false },
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        mothersName: { type: DataTypes.STRING },
        fathersName: { type: DataTypes.STRING },
        phoneNo: { type: DataTypes.INTEGER },
        created: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        updated: { type: DataTypes.DATE },        
        permanentAddress: { type: DataTypes.STRING },
        // studentProfilePhoto: { type: DataTypes.STRING },
        //parentsprofilepicture:{type:Data}
          
    }
    const options = {
        // disable default timestamp fields (createdAt and updatedAt)
        timestamps: false, 
    };
    return sequelize.define('students', attributes, options);
}