"use strict";

const twilio = require('twilio');
const client = twilio();
client.makeCall({
  url: 'http://c1e41589.ngrok.io/voice',
  to: '8312275301',
  from: '3102564808',
  statusCallback: 'http://c1e41589.ngrok.io/events',
  statusCallbackMethod: 'POST',
  statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
}, (err, call) => {
  if(err) { console.log(err); return err; }
  process.stdout.write(call.sid);
});
