var logger = require('./')
var test = require('tape')

var DEFAULTS = {
  email: 'test@test.co',
  apiToken: 'test'
}

test('default settings', function (assert) {
  var Mailgun = require('mailgun').Mailgun
  var mg = new Mailgun(DEFAULTS.apiToken)
  var expected = {
    email: DEFAULTS.email,
    mailgun: mg
  }
  var log = logger(DEFAULTS)
  assert.deepEquals(log, expected)
  assert.end()
})

test('error if message is too long', function (assert) {
  var longMessage = Array(256).join('.')
  var log = logger(DEFAULTS)
  log.send(longMessage, function done (err) {
    assert.ok(err, 'errors expected')
    assert.end()
  })
})
