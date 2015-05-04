# littlelogger

Node.js utility for posting to http://littlelogs.co/

## Example

```js
var logger = require('littlelogger')

var log = logger('email-secret@mailbot.littlelogs.co', 'mailgun-api-key')
var message = 'Totally using a #nodejs/#npm module (#littlelogger) to post to #littlelogs!'

log.send(message, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('sent!')
})
```

## License

MIT
