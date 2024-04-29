class Pay {

    constructor() {}
  
    makePay(quantity) {
      return {
        realized: true,
        quantity,
      };
    }
  }
  
  module.exports = Pay;
  