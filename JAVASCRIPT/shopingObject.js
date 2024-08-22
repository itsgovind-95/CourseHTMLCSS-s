const shoppingCart = {
    items: [],
    total: 0,
    addItem: function(itemName, itemPrice) {
      this.items.push({ name: itemName, price: itemPrice });
      this.total += itemPrice;
    },
    removeItem: function(itemName) {
      const index = this.items.findIndex(function(item) {
        return item.name === itemName;
       });
    
      if (index !== -1) {
        this.total -= this.items[index].price;
        this.items.splice(index, 1);
      }
    }
  };
  
  // Example usage:
  console.log(`Items : ${shoppingCart.items} and Total ${shoppingCart.total}`);
shoppingCart.addItem("Apple", 2.5);
shoppingCart.addItem("Banana", 1);
console.log(shoppingCart.items);
shoppingCart.removeItem("Apple");

console.log(`Items : ${shoppingCart.items} and Total ${shoppingCart.total}`);
  