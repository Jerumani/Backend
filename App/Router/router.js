UserController = require('../Controllers/user_controller');
AppointmentController = require('../Controllers/appointment_controller');
MedicalHistoryController = require('../Controllers/medical_history');

module.exports = (app) => {
  app.route('/').get((req, res) => {
    res.send('Welcome to TCC');
  });

  //Users Endpoint
  app.route('/signin').post(UserController.signin);
  app.route('/signup').post(UserController.signup);


  //Appointments endpoint
  app.route('/getAllAppointments').get(AppointmentController.getAllAppointments);
  app.route('/createAppointment').post(AppointmentController.createAppointment);

  //Medical History Endpoints
  app.route('/getAllMedicalHistory').get(MedicalHistoryController.getAllMediacalHistories);
  app.route('/createMedicalHistory').post(MedicalHistoryController.createMedicalHistory);
};
