var config = require('./config.js'),
    Swipe = require("card-swipe"),
    stripe = require("stripe")(config.stripeKey);

Swipe.stdIn();
new Swipe(function(card){
    stripe.charges.create({
      amount: 200,
      currency: "usd",
      card: {
        number: card.account,
        exp_month: card.exp_month,
        exp_year: card.exp_year
      }
    }, function(err, charge) {
      console.log("err: ", err);
      console.log("charge: ", charge);
    });
});
