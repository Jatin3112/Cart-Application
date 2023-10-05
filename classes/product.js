class Product {
    constructor(name, price, available) {
      this.name = name;
      this.price = price;
      this.available = available;
    }
  
    clone() {
      return new this.constructor(this.name, this.price, this.available);
    }
  }
  
module.exports = Product