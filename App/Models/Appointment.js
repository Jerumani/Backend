const Sequelize = require("sequelize");
const sequelizeConnection = require("../DB/database").sequelizeConnection;
const User = require("./User");

const Appointment = sequelizeConnection.define("Appointment", {
  approved: {
    type: Sequelize.ENUM("Spouse", "Parent", "Child"),
    allowNull: false
  },
  approvalDate: {
    type: Sequelize.BOOLEAN
  },
});
// Adding Foreign Keys
Appointment.hasOne(User, { foreignKey: "patientId" });
Appointment.hasOne(User, { foreignKey: "approverId" });
Appointment.hasOne(User, { foreignKey: "doctorId" });

module.exports = Appointment;
