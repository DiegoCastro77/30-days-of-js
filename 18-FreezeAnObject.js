function protectDog(dogData) {
    const protectedDog = Object.assign({}, dogData);
  
    Object.freeze(protectedDog);
  
    for (let key in protectedDog) {
      if (typeof protectedDog[key] === 'object' && protectedDog[key] !== null) {
        Object.freeze(protectedDog[key]);
      }
    }
  
    return protectedDog;
  }
  
  const originalDog = {
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
  };
  
  const protectedDog = protectDog(originalDog);
  
  originalDog.name = "Toro";
  originalDog.owner.name = "Pedro";
  
  console.log(originalDog.name); 
  console.log(originalDog.owner.name); 
  
  console.log(protectedDog.name);
  console.log(protectedDog.owner.name);
  