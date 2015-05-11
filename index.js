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
      from: this.email,
      to: 'noreply@test.com',
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
