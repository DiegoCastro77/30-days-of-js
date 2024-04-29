function processPay(paymentMethod, amount) {
    return paymentMethod.makePay(amount);
  }
  const Card = require('./21-Card.class');
  const PayPal = require('./21-Pay.class');
  const Cash = require('./21-Cash.class');
  
  // Ejemplo 1
  const card = new Card("4913478952471122");
  console.log(processPay(card, 100));
  
  // Ejemplo 2
  const paypal = new PayPal("test@mail.com");
  console.log(processPay(paypal, 240));
  
  // Ejemplo 3
  const cash = new Cash();
  console.log(processPay(cash, 400));
  

  