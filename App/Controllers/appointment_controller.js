AppointmentModel = require("../Models/Appointment");

module.exports = {
    getAllAppointments: (req, res) => {
    AppointmentModel.findAll()
      .then(appointments => {
        res.send(appointments);
      })
      .catch(err => {
        res.send(err);
      });
  },

  createAppointment: (req, res) => {
    AppointmentModel.create(req.body)
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.send(err);
     
};
