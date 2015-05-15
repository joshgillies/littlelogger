# littlelogger

[![Build Status](https://travis-ci.org/joshgillies/littlelogger.svg)](https://travis-ci.org/joshgillies/littlelogger)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Node.js utility for posting to http://littlelogs.co/

## Example

```js
var logger = require('littlelogger')

var log = logger('email-secret@mailbot.littlelogs.co')
var message = 'Totally using a #nodejs/#npm module (#littlelogger) to post to #littlelogs!'

log.send(message, function (err, info) {
  if (err) {
    return console.log(err)
  }
  console.log('sent!')
})
```

## API

### logger(opts)

A logger constructor is returned via `require('littlelogger')` and has a single argument `opts`.
Where `opts` is an Object with the following properties:

  * `opts.email`: your secret email address as provided by littlelogs
  * `opts.transport`: a [Nodemailer supported transport]. Defaults to [nodemailer-direct-transport].

Optionally you may pass a String as the `opts` argument as a short-hand for `opts.email`.

Useful should you wish to use the default [nodemailer-direct-transport], or want to set your desired
transport later via `logger.createTransport()`.

### logger.createTransport(transport)

Accepts a [Nodemailer supported transport] as it's first argument `transport`.

### logger.send(message, cb(err, info))

The `message` argument accepts a String of <= 250 character.

Your callback function `cb` will be called once the message has been succesfully posted to littlelogs.
Or in the case of an Error your callback function `cb` will be called, passing `err` as the first
argument.

## License

MIT

[Nodemailer supported transport]:https://github.com/andris9/Nodemailer#available-transports
[nodemailer-direct-transport]:https://github.com/andris9/nodemailer-direct-transport
