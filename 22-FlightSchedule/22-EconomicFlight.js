const Flight = require('./Flight');

class EconomicFlight extends Flight {
  sellTicket(passenger) {
    if (passenger.age < 18 || passenger.age > 65) {
      this.price *= 0.8; 
    }
    return super.sellTicket(passenger);
  }
}

module.exports = EconomicFlight;
