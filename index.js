var Mailgun = require('mailgun').Mailgun

function Logger (email, apiToken) {
  this.email = email
  this.mailgun = new Mailgun(apiToken)
}

Logger.prototype.send = function send (message, cb) {
  if (message.length > 250) {
    cb(new Error('Unable to post message. Message length must be <=250 characters'))
    return
  }
  this.mailgun.sendText('noreply@test.com', this.email, 'Little Log', message, cb)
}

module.exports = function logger (email, apiToken) {
  return new Logger(email, apiToken)
}
