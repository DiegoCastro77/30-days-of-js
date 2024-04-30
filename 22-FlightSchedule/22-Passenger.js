class Passenger {
    constructor(name, lastName, age) {
      this.name = name;
      this.lastName = lastName;
      this.age = age;
      this.flights = [];
    }
  
    addFlight(flight) {
      const flightDetails = {
        origin: flight.origin,
        destination: flight.destination,
        date: flight.date,
        price: flight.price
      };
      this.flights.push(flightDetails);
    }
  }
  
  module.exports = Passenger;