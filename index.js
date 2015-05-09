var Mailgun = require('mailgun').Mailgun

function Logger (opts) {
  this.email = opts.email
  this.mailgun = new Mailgun(opts.apiToken)
}

Logger.prototype.send = function send (message, cb) {
  if (message.length > 250) {
    cb(new Error('Unable to post message. Message length must be <=250 characters'))
    return
  }
  this.mailgun.sendText('noreply@test.com', this.email, 'Little Log', message, cb)
}

module.exports = function logger (email, opts) {
  if (!opts) {
    opts = {}
  }

  if (typeof email === 'object') {
    opts = email
  }

  if (typeof email === 'string') {
    opts.email = email
  }

  return new Logger(opts)
}
