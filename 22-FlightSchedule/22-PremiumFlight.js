class PremiumFlight extends Flight {
    constructor(origin, destination, date, capacity, price, specialService) {
      super(origin, destination, date, capacity, price)
      this.price = price + specialService
    }
    sellTicket(passenger) {
        const totalTicketPrice = this.price + this.specialService; 
    
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
  
  

  
module.exports = PremiumFlight;