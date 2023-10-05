class ShoppingCart {
  constructor() {
    this.cartItems = [];
  }

  addItem(product, quantity) {
    if (isNaN(quantity)) {
      return "Please enter numeric values for quantity";
    }

    const clonedProduct = product.clone();
    const existingCartItem = this.cartItems.find(
      (item) => item.product.name === clonedProduct.name
    );

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      this.cartItems.push({ product: clonedProduct, quantity });
      return "Item added to cart";
    }
  }

  removeItem(productName) {
    const productToRemove = this.cartItems.find(
      (item) => item.product.name === productName
    );

    if (!productToRemove) return "Product not present in the cart\n";

    this.cartItems = this.cartItems.filter(
      (item) => item.product.name !== productName
    );
    return "Item removed from cart.\n";
  }

  updateQuantity(productName, newQuantity) {
    const cartItem = this.cartItems.find(
      (item) => item.product.name === productName
    );

    if (cartItem) {
      cartItem.quantity = newQuantity;
      return "Quantity Item has been updated successfully";
    } else {
      return "Product not present in the cart!";
    }
  }

  calculateTotalBill() {
    return this.cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  displayCart() {
    let table = `Your Cart:\n`;
    table += `-----------------------------------------------------\n`;
    table += `| Quantity | Product Name                              |\n`;
    table += `-----------------------------------------------------\n`;

    this.cartItems.forEach((item) => {
      const quantity = item.quantity;
      const productName = item.product.name;

      table += `| ${quantity.toString().padEnd(9)} | ${productName.padEnd(
        40
      )} |\n`;
    });

    table += `-----------------------------------------------------\n`;
    table += `| Total Amount | $${this.calculateTotalBill()
      .toFixed(2)
      .toString()
      .padEnd(37)}|\n`;
    table += `-----------------------------------------------------\n`;
    return table;
  }

  listProducts() {
    console.log("\nList of Products:");
    console.log("-------------------------------------");
    console.log("Product Name   | Price   | Available");
    console.log("-------------------------------------");
    console.log("Laptop         | $1000   | Yes");
    console.log("Headphones     | $50     | Yes");
    console.log("-------------------------------------\n");
  }
}

module.exports = ShoppingCart;
