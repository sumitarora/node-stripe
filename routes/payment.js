var stripeApiKeyTesting = "sk_test_BQokikJOvBiI2HlWgH4olfQ2";
var express = require('express');
var stripe = require('stripe') (stripeApiKeyTesting);
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  var stripeToken = req.body.stripeToken;

  stripe.setApiKey("sk_test_BQokikJOvBiI2HlWgH4olfQ2");
  var charge = stripe.charges.create({
    amount: 1000, // amount in cents, again
    currency: "usd",
    card: stripeToken + 'sada',
    description: "payinguser@example.com"
  }, function(err, charge) {
    console.log(err);
    console.log(charge);
    if (err && err.type === 'StripeCardError') {
      
    }
  });

  res.send('respond with a resource' + stripeToken);
});

module.exports = router;
