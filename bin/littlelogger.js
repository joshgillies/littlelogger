var logger = require('..')
var config = require('rc')('littlelogger', {
  initialized: false
})
var argv = require('minimist')(process.argv.slice(2))
var pkg = require('../package.json')
var bin = Object.keys(pkg.bin)[0]

if (argv.v || argv.version) {
  console.log(pkg.version)
  process.exit(0)
}

if (argv.h || argv.help) {
  console.log([
    '',
    'Usage:',
    '',
    bin + ' [ <options> ]',
    '',
    'Options:',
    '',
    '-h, --help       Show this help.',
    '-v, --version    Show ' + bin + ' version.',
    ''
  ].join('\n'))
  process.exit(0)
}
