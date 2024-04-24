function sortByAvailabilityAndPrice(products) {
    const sortedProducts = [...products];
  
    sortedProducts.sort((a, b) => {
      if (a.inStock && !b.inStock) {
        return -1;
      } else if (!a.inStock && b.inStock) {
        return 1;
      } else {
        return a.price - b.price;
      }
    });
  
    return sortedProducts;
  }
  
  const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
  ];
  
  const sortedProducts = sortByAvailabilityAndPrice(products);
  console.log(sortedProducts);
  console.log(products);
  