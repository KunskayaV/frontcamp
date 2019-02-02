const path = require('path');
const winston = require('winston');

winston.configure({
  transports: [
    new winston.transports.File({ filename: path.join(process.cwd(), 'logs/requests_logs.log') })
  ]
});

function setup(app) {
  // view engine setup
  app.set('views', path.join(process.cwd(), 'views'));
  app.set('view engine', 'jade');
}

module.exports = setup;