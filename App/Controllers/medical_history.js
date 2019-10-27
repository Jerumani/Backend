MedicalHistoryModel = require("../Models/MedicalHistory");

module.exports = {
  getAllMediacalHistories: (req, res) => {
    MedicalHistoryModel.findAll()
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.send(err);
      });
  },

  createMedicalHistory: (req, res) => {
    MedicalHistoryModel.create({
      treatment: req.body.treatment,
      appointmentDate: req.body.appointmentDate,
      doctorId: req.body.doctorId,
      patientId: req.body.patientId
    })
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.send(err);
      });
  },

  getPatientMedicalHistory: (req,res) => {
    MedicalHistoryModel.findAll({
      where: {
        patientId: req.body.patientId
      }
    }).then(
      response => {
        res.send(response)
      }
    ).catch(err => {
      res.send(err)
    })
  },

  getDoctorMedicalHistory: (req,res) => {
    MedicalHistoryModel.findAll({
      where: {
        doctorId: req.body.doctorId
      }
    }).then(
      response => {
        res.send(response)
      }
    ).catch(err => {
      res.send(err)
    })
  }
};
