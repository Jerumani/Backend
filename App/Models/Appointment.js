const Sequelize = require("sequelize");
const sequelizeConnection = require("../DB/database").sequelizeConnection;
const User = require("./User");

const Appointment = sequelizeConnection.define("Appointment", {
  approved: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  approvalDate: {
    type: Sequelize.BOOLEAN
  },
});
// Adding Foreign Keys
Appointment.belongsTo(User, { foreignKey: "patientId" });
Appointment.belongsTo(User, { foreignKey: "approverId" });
Appointment.belongsTo(User, { foreignKey: "doctorId" });

module.exports = Appointment;
