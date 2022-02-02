const { DataTypes } = require('sequelize');

module.exports = modelTeacher;

function modelTeacher(sequelize) {
    const attributes = {
        id: { type: DataTypes.INTEGER,autoIncrement:true ,primaryKey:true},
        email: { type: DataTypes.STRING},
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        qualification:{ type: DataTypes.STRING },
        phoneNo: { type: DataTypes.INTEGER },
        experience:{ type: DataTypes.STRING },
        created: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        updated: { type: DataTypes.DATE },        
        permanentAddress: { type: DataTypes.STRING },
        profilePicture:{type:DataTypes.STRING}   ,
        passwordHash: { type: DataTypes.STRING },
    }
    const options = {
        // disable default timestamp fields (createdAt and updatedAt)
        timestamps: false, 
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }        
    };
    return sequelize.define('teachers', attributes, options);
}