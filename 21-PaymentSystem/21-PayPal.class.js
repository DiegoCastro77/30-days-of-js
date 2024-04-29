const Pay = require('./21-Pay.class');

class PayPal extends Pay {

    constructor(email) {
      super();
      this.email = email;
    }
  
    makePay(quantity) {
      return {
        ...super.makePay(quantity),
        platform: "PayPal",
        email: this.email,
      };
    }
  }
  
  module.exports = PayPal;