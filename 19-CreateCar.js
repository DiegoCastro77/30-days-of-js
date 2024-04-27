class Car {
    constructor(brand, model, year, mileage) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
      this.state = true; 
    }
  
    turnOn() {
      this.state = true;
      console.log("El auto está encendido.");
    }
  
    turnOff() {
      this.state = false;
    }
  
    drive(kilometers) {
      if (this.state) {
        this.mileage += kilometers;
      } 
    }
  }

  const toyota = new Car("Toyota", "Corolla", 2020, 0);
  toyota.turnOn();
  toyota.drive(100);
  console.log(toyota.mileage); 
  
  const honda = new Car("Honda", "Civic", 2019, 0);
  honda.turnOff();
  try {
    honda.drive(100);
  } catch (error) {
    console.log(error.message);
  }
  