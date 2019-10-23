const Sequelize = require('sequelize');
const sequelizeConnection = require('../DB/database').sequelizeConnection;
const User = require('./User');
const MedicalHistory = sequelizeConnection.define(
    'MedicalHistory',
    {
      treatment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      appointmentDate: {
        type: Sequelize.DATE,
      },
    }
);
MedicalHistory.hasOne(User, {foreignKey: 'doctorId'});
MedicalHistory.hasOne(User, {foreignKey: 'patientId'});
module.exports = MedicalHistory;
