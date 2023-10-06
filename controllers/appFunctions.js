function processInput(rl, cart, laptop, headphones) {
  rl.question(
    "Choose an action:\n1. List Products\n2. Add Product\n3. Remove Product\n4. Update Quantity\n5. View Cart\n6. Calculate Total Bill\n7. Exit\nEnter your choice: ",
    (choice) => {
      switch (choice) {
        case "1":
          cart.listProducts();
          processInput(rl, cart, laptop, headphones);
          break;

        case "2":
          rl.question("Enter a product name to add: ", (productName) => {

            productName = productName.toLowerCase();

            let product =
              productName === "laptop"
                ? laptop
                : productName === "headphones"
                ? headphones
                : null;

            if (!product) {
              console.log(
                "Product not available. Please press option 1 to check available products.\n"
              );
              processInput(rl, cart, laptop, headphones);
              return;
            }

            rl.question("Enter quantity: ", (quantity) => {
              console.log(cart.addItem(product, parseInt(quantity)));
              cart.cartItems.length !== 0 && console.log(cart.displayCart());
              processInput(rl, cart, laptop, headphones);
            });
          });
          break;

        case "3":
          if (cart.cartItems.length === 0) {
            console.log("Cart is empty. Please add items to it first\n");
            processInput(rl, cart, laptop, headphones);
          }

          rl.question("Enter a product name to remove: ", (productName) => {
            console.log(cart.removeItem(productName));
            processInput(rl, cart, laptop, headphones);
          });
          break;

        case "4":
          if (cart.cartItems.length === 0) {
            console.log("Cart is empty. Please add items to it first\n");
            processInput(rl, cart, laptop, headphones);
          }

          rl.question(
            "Enter a product name to update quantity: ",
            (productName) => {
              rl.question("Enter new quantity: ", (newQuantity) => {

                const product = productName.toLowerCase();
                console.log(
                  cart.updateQuantity(product, parseInt(newQuantity))
                );
                processInput(rl, cart, laptop, headphones);
              });
            }
          );
          break;

        case "5":
          if (cart.cartItems.length === 0) {
            console.log("Cart is empty. Please add items to it first\n");
            processInput(rl, cart, laptop, headphones);
            break;
          } else {
            console.log(cart.displayCart());

            processInput(rl, cart, laptop, headphones);
            break;
          }

        case "6":
          console.log(`Total Bill: $${cart.calculateTotalBill()}\n`);
          processInput(rl, cart, laptop, headphones);
          break;

        case "7":
          rl.close();
          break;

        default:
          console.log("Invalid choice. Please enter a valid option.\n");
          processInput(rl, cart, laptop, headphones);
          break;
      }
    }
  );
}

module.exports = { processInput };
