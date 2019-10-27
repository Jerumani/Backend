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
MedicalHistory.belongsTo(User, {foreignKey: 'doctorId'});
MedicalHistory.belongsTo(User, {foreignKey: 'patientId'});
module.exports = MedicalHistory;
