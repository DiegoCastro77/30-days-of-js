class Product {
    constructor(price, description) {
      this.price = price;
      this.description = description;
    }
  
    getPrice() {
      return this.price;
    }
  
    getDescription() {
      return this.description;
    }
  }
  
  class BasicProduct extends Product {
    constructor(price, description) {
      super(price, description);
    }
  }
  
  class WarrantyDecorator extends Product {
    constructor(basicProduct) {
      super(basicProduct.getPrice() + 20, basicProduct.getDescription() + " con garantía");
    }
  }
  
  class ShippingInsuranceDecorator extends Product {
    constructor(basicProduct) {
      super(basicProduct.getPrice() + 20, basicProduct.getDescription() + " con seguro de envío");
    }
  }
  
  const basicProduct = new BasicProduct(100, "Producto");
  const withWarranty = new WarrantyDecorator(basicProduct);
  const withShippingInsurance = new ShippingInsuranceDecorator(withWarranty);
  
  console.log(`Precio: $${withShippingInsurance.getPrice()} - Descripción: ${withShippingInsurance.getDescription()}`);
  
  