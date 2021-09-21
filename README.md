# Send an SMS with Twilio in Node.js

This is an example of how to send an SMS. To run this script you should:

1. Download the index.js and package.json files
2. Install the dependencies with `npm install`
3. Get your Twilio Account SID and Auth Token from your [Twilio console](https://www.twilio.com/console) ([sign up for a free account](https://www.twilio.com/try-twilio) if you don't already have one)
4. [Get a Twilio number](https://console.twilio.com/develop/phone-numbers/manage/active) that can send SMS 
5. Set the credentials and other variables in the environment and run the script:

```
TWILIO_ACCOUNT_SID=ACXXXX \
  TWILIO_AUTH_TOKEN=abc123 \
  TWILIO_PHONE_NUMBER=+12345678 \
  TO_PHONE_NUMBER=YOUR_PHONE_NUMBER \
  node index.js
```

Alternatively, you can replace the calls to `process.env` with your variables.

Run the script and you will receive a new SMS message.