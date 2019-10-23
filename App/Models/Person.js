const Sequelize = require('sequelize');
const sequelizeConnection = require('../DB/database').sequelizeConnection;
const UserCategory = require('./UserCategory');

const Person = sequelizeConnection.define('Person', {
  firstName: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  middleName: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING(10),
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    min: 7,
  },
  emailVerification: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isVerified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

Person.belongsTo(UserCategory);

module.exports = Person;
