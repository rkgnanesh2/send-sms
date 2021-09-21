const twilio = require("twilio");
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = process.env.PORT || 5000;

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));



const client = twilio(
  process.env.Auth_SID,
  process.env.Auth_Token
);

function sendSMS(from, to, body) {
  client.messages
    .create({ from, to, body })
    .then((message) => {
      console.log(
        `SMS message sent from ${from} to ${to}. Message SID: ${message.sid}`
      );
     
    })
    .catch((error) => {
      console.error(error);
    });
}

const Twilio_numb = +12182168487;
const sender_number = 9620679264;
// const MessBody = 'this is body';

// sendSMS(
//   Twilio_numb,
//   "+91"+sender_number,
//   MessBody
// );


app.get('/', (req, res) =>  {
  res.render('index')
})


app.post('/', (req, res) => {
  console.log(req.body)
  const MessBody = req.body.message;

  sendSMS(
  Twilio_numb,
  "+91"+sender_number,
  MessBody
);
res.redirect('/')

})


app.listen(port , ()=> {
  console.log(`server running on port ${port}`)
})