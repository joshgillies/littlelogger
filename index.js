var nodemailer = require('nodemailer')

function Logger (opts) {
  this.email = opts.email
  this.transport = nodemailer.createTransport(opts.transport)
}

Logger.prototype.createTransport = function createTransport (opts) {
  this.transport = nodemailer.createTransport(opts)
}

Logger.prototype.send = function send (message, cb) {
  var opts = {}

  cb = cb || function noop () {}

  if (typeof message === 'object') {
    opts = message
  }

  if (typeof message === 'string') {
    opts = {
      from: 'noreply@test.com',
      to: this.email,
      subject: 'littlelogger',
      text: message
    }

    if (opts.message.length > 250) {
      cb(new Error('Unable to post message. Message length must be <=250 characters'))
      return
    }
  }

  this.transport.sendMail(opts, cb)
}

module.exports = function logger (opts) {
  if (typeof email === 'string') {
    opts = {}
    opts.email = opts
  }

  return new Logger(opts)
}
