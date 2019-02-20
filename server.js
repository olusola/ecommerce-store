require('dotenv').config()
const express = require('express')
const path = require('path')
const stripe = require('stripe')(process.env.KEY_SECRET)
const app = express()
var accountSid = process.env.ACCOUNT_SID
var authToken = process.env.AUTH_TOKEN

// var twilio = require('twilio')
// var client = new twilio(accountSid, authToken)

const bodyParser = require('body-parser')
const port = process.env.SERVER_PORT

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get(`${process.env.BASE_URL}/api`, (req, res) => {
  res.send({ Hello: process.env.KEY_SECRET })
})

app.post(`${process.env.BASE_URL}/charge`, (req, res) => {
  console.log(req.body)
  const { token, amount } = req.body

  stripe.charges.create({
    amount ,
    currency: "GBP",
    description: "Sample Charge",
    source: token.id,
    metadata : {
      rideid: 88888
    }
  })
  .then(charge => res.send(charge))
    .catch(err => {
      console.log("Error:", err);
    res.status(500).send({error: "Purchase Failed"})
  })

})

app.listen(port, () => console.log(`Listening on port ${port}`))