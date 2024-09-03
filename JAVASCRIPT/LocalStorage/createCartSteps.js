// condition(ternary operator)  to check wether the product is present in cart or not
//      if it present the getItem if not initialize the cart:

var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :[];