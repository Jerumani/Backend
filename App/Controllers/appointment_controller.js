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
    AppointmentModel.create({
      approved: req.body.approved
    })
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.send(err);
      });
    }
     
};
