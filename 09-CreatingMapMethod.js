const numbers = [1, 2, 3, 4]
const doubledArray = myMap(numbers, (num) => num * 2)
const pets = [{ name: "michi", age: 2 },
                { name: "firulais", age: 6 }]   
const namesArray = myMap(pets, (pet) => pet.name)

function myMap(array, func) {
    let result = []
    for (let element of array) {
      result.push(func(element))
    }
    console.log(result)
    return result

}

