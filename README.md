# littlelogger

[![Build Status](https://travis-ci.org/joshgillies/littlelogger.svg)](https://travis-ci.org/joshgillies/littlelogger)

Node.js utility for posting to http://littlelogs.co/

## Example

```js
var logger = require('littlelogger')

var log = logger({
  email: 'email-secret@mailbot.littlelogs.co',
  apiToken: 'mailgun-api-key'
})
var message = 'Totally using a #nodejs/#npm module (#littlelogger) to post to #littlelogs!'

log.send(message, function (err) {
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
  * `opts.apiToken`: your mailgun API token

### logger.send(message, cb(err))

The `message` argument accepts a String of <= 250 character.

Your callback function `cb` will be called once the message has been succesfully posted to littlelogs.
Or in the case of an Error your callback function `cb` will be called, passing `err` as the first
argument.

## License

MIT
