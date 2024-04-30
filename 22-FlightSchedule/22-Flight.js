class Flight {
    constructor(origin, destination, date, capacity, price) {
      this.origin = origin;
      this.destination = destination;
      this.date = date;
      this.capacity = capacity;
      this.price = price;
      this.passengers = [];
    }
  
    sellTicket(passenger) {
      if (this.capacity > 0) {
        this.passengers.push(passenger);
        passenger.addFlight(this);
        this.capacity--;
        return new Reservation(this, passenger);
      } else {
        console.log("No hay capacidad disponible en este vuelo.");
        return null;
      }
    }
  }
  
  module.exports = Flight;