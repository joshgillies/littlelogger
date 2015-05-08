var logger = require('..')
var config = require('rc')('littlelogger', {
  initialized: false
})
var path = require('path')
var pkg = require('../package.json')
var bin = Object.keys(pkg.bin)[0]

var osenv = require('osenv')
var read = require('read')

console.log(config)

var firstRun = (!config.initialized || ~config._.indexOf('init'))

function onError (err) {
  console.error(err)
  process.exit(0)
}

function init (conf) {
  read({ prompt: 'LittleLogs Email:' }, function getEmail (err, email) {
    if (err) onError(err)
    read({ prompt: 'Mailgun API Token:' }, function getApiToken (err, token) {
      if (err) onError(err)
      console.log('About to write to %s\n\n%s', osenv.home, JSON.stringify())
      read({ prompt: 'Is this OK?', default: 'yes' }, function getConformation (err, ok) {
        if (err) onError(err)
      })
    })
  })
}

if (config.v || config.version) {
  console.log(pkg.version)
  process.exit(0)
}

if (config.h || config.help) {
  console.log([
    'Update LittleLogs timeline.',
    '',
    'Usage:',
    '',
    bin + ' <command | message> [ <options> ].',
    '',
    'Commands:',
    '',
    'init - use to configure ' + bin + '.',
    '',
    'Options:',
    '',
    '-m, --message    The message you wish to send to LittleLogs.',
    '                 Must be less than 250 characters!',
    '-h, --help       Show this help.',
    '-v, --version    Show ' + bin + ' version.',
    ''
  ].join('\n'))
  process.exit(0)
}

if (firstRun) {
  init()
}
