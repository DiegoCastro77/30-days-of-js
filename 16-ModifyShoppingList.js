function processShoppingList(shoppingList) {
    let total = 0;
  
    shoppingList.forEach(item => {
      if (item.name.includes("oferta")) {
        item.price *= 0.8; 
      }
      item.price *= item.quantity;
      total += item.price;
      delete item.quantity; 
    });
  
    return total;
  }
  
  
  const shoppingList = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
  ];
  
  const totalPrice = processShoppingList(shoppingList);
  console.log(totalPrice);
  console.log(shoppingList); 