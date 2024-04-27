function arrayModified() {
    const myFilter = function(callback) {
        const filteredArray = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                filteredArray.push(this[i]);
            }
        }
        return filteredArray;
    };
  

    Object.defineProperty(Array.prototype, 'myFilter', {
        value: myFilter,
        enumerable: false,
        writable: true,
        configurable: true
    });
  
    const array = [1, 2, 3, 4, 5, 6];
    const filteredArray1 = array.myFilter(num => num % 2 === 0);
    console.log(filteredArray1);
  
    const arr = [
      { name: "Juan", age: 10 },
      { name: "Pedro", age: 20 },
      { name: "Maria", age: 30 }
    ];
  
    const filteredArray2 = arr.myFilter(person => person.age > 18);
    console.log(filteredArray2.map(person => person.name));
}

arrayModified();
