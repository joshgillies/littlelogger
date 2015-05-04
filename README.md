# node-littlelogs

Node.js utility for posting to http://littlelogs.co/

## Example

```js
var logger = require('littlelogger')

var log = logger('email-secret@mailbot.littlelogs.co', 'mailgun-api-key')

log.send('Today I used #littlelogger from #npm to post to #littlelog', function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('sent!')
})
```

## License

MIT
