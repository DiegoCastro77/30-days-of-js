class Animal {
    constructor(name, age, specie) {
      this.name = name;
      this.age = age;
      this.specie = specie;
    }
  
    getInfo() {
      return {
        name: this.name,
        age: this.age,
        specie: this.specie
      };
    }
  }
  
  class Mammal extends Animal {
    constructor(name, age, specie, hasFur) {
      super(name, age, specie);
      this.hasFur = hasFur;
    }
  
    getInfo() {
      const animalInfo = super.getInfo();
      return {
        ...animalInfo,
        hasFur: this.hasFur
      };
    }
  }
  
  class Dog extends Mammal {
    constructor(name, age, breed, hasFur) {
      super(name, age, "dog", hasFur);
      this.breed = breed;
    }
  
    getInfo() {
      const mammalInfo = super.getInfo();
      return {
        ...mammalInfo,
        breed: this.breed
      };
    }
  
    bark() {
      return "woof!";
    }
  }
  
  const bird = new Animal("pepe", 1, "bird");
  console.log(bird.getInfo());
  
  const hippo = new Mammal("bartolo", 3, "hippo", false);
  console.log(hippo.getInfo());
  
  const dog = new Dog("fido", 4, "pastor aleman", true);
  console.log(dog.bark());
  