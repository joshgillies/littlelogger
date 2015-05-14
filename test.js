var logger = require('./')
var test = require('tape')
var mockTransport = require('nodemailer-mock-transport')

var DEFAULTS = {
  email: 'test@test.co',
  transport: mockTransport()
}

test('default settings', function (assert) {
  var log = logger(DEFAULTS)
  assert.equal(DEFAULTS.email, log.email)
  assert.end()
})

test('email shorthand', function (assert) {
  var log = logger(DEFAULTS.email)
  assert.equal(DEFAULTS.email, log.email)
  assert.equal(log.transport.transporter.name, 'SMTP (direct)')
  assert.end()
})

test('createTransport helper', function (assert) {
  var log = logger(DEFAULTS.email)
  assert.equal(log.transport.transporter.name, 'SMTP (direct)')
  log.createTransport(mockTransport())
  assert.equal(DEFAULTS.email, log.email)
  assert.equal(log.transport.transporter.name, 'Mock')
  assert.end()
})

test('error if message is too long', function (assert) {
  var log = logger(DEFAULTS)
  var longMessage = Array(256).join('.')
  log.send(longMessage, function done (err) {
    assert.ok(err, 'errors expected')
    assert.end()
  })
})

test('can send message', function (assert) {
  var log = logger(DEFAULTS)
  var message = 'I love littlogs via littlelogger!'
  log.send(message, function done (err) {
    assert.ifError(err)
    assert.equal(log.transport.transporter.sentMail.length, 1)
    assert.equal(log.transport.transporter.sentMail[0].data.to, DEFAULTS.email)
    assert.equal(log.transport.transporter.sentMail[0].message.content, message)
    assert.end()
  })
})
