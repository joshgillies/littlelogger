var logger = require('./')
var test = require('tape')

var DEFAULTS = {
  email: 'test@test.co',
  apiKey: 'test'
}

test('default settings', function (assert) {
  var Mailgun = require('mailgun').Mailgun
  var mg = new Mailgun(DEFAULTS.apiKey)
  var expected = {
    email: 'test@test.co',
    mailgun: mg
  }
  var log = logger(DEFAULTS.email, DEFAULTS.apiKey)
  assert.deepEquals(log, expected)
  assert.end()
})

test('error if message is too long', function (assert) {
  var longMessage = Array(256).join('.')
  var log = logger(DEFAULTS.email, DEFAULTS.apiKey)
  log.send(longMessage, function done (err) {
    assert.ok(err, 'errors expected')
    assert.end()
  })
})
