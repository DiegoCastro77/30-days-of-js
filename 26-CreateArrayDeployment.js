class MyArray {
    constructor() {
      this.data = {};
      this.length = 0;
    }
  
    map(func) {
      let newArray = new MyArray();
      for (let i = 0; i < this.length; i++) {
        const element = this.data[i];
        newArray.push(func(element));
      }
      return newArray;
    }
  
    filter(func) {
      let newArray = new MyArray();
      this.map((element) => {
        if (func(element)) {
          newArray.push(element);
        }
      });
      return newArray;
    }
  
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
  
    pop() {
      let deletedItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return deletedItem;
    }
  
    join(character = ",") {
      let myString = '';
      for (let i = 0; i < this.length; i++) {
        myString += this.data[i] + character;
      }
      return myString.slice(0, -1);
    }
  
    shift() {
      let deletedItem = this.data[0];
      delete this.data[0];
      for (let i = 0; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      this.pop();
      return deletedItem;
    }
  
    unshift(item) {
      if (!item && item !== 0) {
        return this.length
      } else {
        this.data[0] = item;
        for (let i = 0; i < this.length; i++) {
          this.data[i + 1] = this.data[i];
        }
        this.length++;
        return this.length;
      }
    }
  }

  const myArray = new MyArray();
myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log(myArray.data);

const myArray2 = new MyArray();
myArray2.push("Platzinauta");
myArray2.unshift("Hola!");
console.log(myArray2.data); 