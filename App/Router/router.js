UserController = require('../Controllers/user_controller');

module.exports = (app) => {
  app.route('/').get((req, res) => {
    res.send('Welcome to TCC');
  });
  app.route('/signin').post(UserController.signin);
  app.route('/signup').post(UserController.signup);
};
