'use strict';
var express = require('express');
var router = express.Router();
var paylike = require('paylike')('51669e53-16ab-4bb4-b5de-34c575c047cc');
const url = require('url');

/* GET users listing. */
router.get('', function(req, res, next) {
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

});

module.exports = router;
