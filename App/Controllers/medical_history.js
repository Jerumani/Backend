MedicalHistoryModel = require("../Models/MedicalHistory");

module.exports = {
    getAllMediacalHistories: (req, res) => {
    MedicalHistoryModel.findAll()
      .then(appointments => {
        res.send(appointments);
      })
      .catch(err => {
        res.send(err);
      });
  },

  createMedicalHistory: (req, res) => {
    MedicalHistoryModel.create(req.body)
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.send(err);
      });
    }

     
};
