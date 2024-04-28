class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  class Article extends Product {
    addToCart() {
      const message = `Adding ${this.quantity} units of the article ${this.name} to the cart`;
      console.log(message);
      return message;
    }
  }
  
  class Service extends Product {
    addToCart() {
      const message = `Adding the service ${this.name} to the cart`;
      console.log(message);
      return message;
    }
  }
  
  class Cart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      product.addToCart();
      this.products.push(product);
    }
  
    deleteProduct(product) {
      this.products = this.products.filter((item) => item.name !== product.name);
      console.log(`Removing product ${product.name} from the cart`);
    }
  
    calculateTotal() {
      const total = this.products.reduce(
        (sum, currentItem) => currentItem.price * currentItem.quantity + sum,
        0
      );
      console.log(`Total purchase amount: ${total}`);
      return total;
    }
  
    getProducts() {
      console.log("Products in the cart:");
      for (const product of this.products) {
        console.log(product);
      }
      return this.products;
    }
  }
  const book = new Article("Book", 100, 2);
  const course = new Service("Course", 120, 1);
  
  const cart = new Cart();
  cart.addProduct(book);
  cart.addProduct(course);
  cart.calculateTotal();
  cart.deleteProduct(book);
  cart.calculateTotal();
  