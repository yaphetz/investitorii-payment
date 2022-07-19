const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const url = require("url");
var paylike = require('paylike')('51669e53-16ab-4bb4-b5de-34c575c047cc');

const app = express();
app.use(cors({origin: true}));

app.get('/ValidatePayment', async (req, res) => {
    let transactionID = url.parse(req.url, true).query.transactionID;
    let amount = url.parse(req.url, true).query.amount;
    let currency = url.parse(req.url, true).query.currency;
    paylike.transactions.capture(transactionID, {
      amount: amount,
      currency: currency,
  })
      .then(function(){
        res.send(true);
          console.log('Captured USD 12.00 from transaction '+transactionID);
      })
      .catch(error=> {
        res.send(false)
        console.log(error)
      })
})

exports.paylike = functions.https.onRequest(app);
