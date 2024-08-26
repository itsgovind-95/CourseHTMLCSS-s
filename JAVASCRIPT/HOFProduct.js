let products = [
    { id: 1, name: 'Laptop Notebook', price: 10.99, inStock: false},
    { id: 2, name: 'Mouse', price: 12.99, inStock: true},
    { id: 3, name: 'gaming Mouse', price: 9.99, inStock: true},
    { id: 4, name: "keyboard", price: 5.99, inStock: true},
    { id: 5, name: "gaming keyboard", price: 20.99, inStock: true}
];

let result = products
    .filter(element => element.price >= 10 && element.inStock == true)
    .map(element => element.price)
    .reduce((acc, curr) => acc + curr,0);

console.log(result);