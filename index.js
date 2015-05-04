var Mailgun = require('mailgun').Mailgun

function Logger (email, apiToken) {
  this.email = email
  this.mailgun = new Mailgun(apiToken)
}

Logger.prototype.send = function send (message, cb) {
  this.mailgun.sendText('noreply@test.com', this.email, 'Little Log', message, cb)
}

module.exports = function logger (email, apiToken) {
  return new Logger(email, apiToken)
}
