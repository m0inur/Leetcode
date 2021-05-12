/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
let Cashier = function(n, discount, products, prices) {
    this.n = n;
    this.discount = discount;
    this.products = products;
    this.prices = prices;
    this.customerCount = 0;
};

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
    let bill = 0;
    this.customerCount++;

    for(let i = 0; i < product.length; i++) {
        bill += this.prices[this.products.indexOf(product[i])] * amount[i];
        // console.log(product[i] + " cost " + this.prices[this.products.indexOf(product[i])]);
    }

    if(this.customerCount === this.n) {
        // console.log("Give discount")
        bill = (bill - (this.discount * bill) / 100);
        this.customerCount = 0;
    }
    return bill;
};