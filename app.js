"use strict";
// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// Добавить продукт в корзину
// Удалить продукт из корзины по ID
// Посчитать стоимость товаров в корзине
// Задать доставку
// Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(date, marketId) {
        super(new Date());
        this.marketId = marketId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((product) => product.id !== productId);
    }
    getSum() {
        if (this.products.length) {
            return this.products
                .map((p) => p.price)
                .reduce((currentSum, currentPrice) => currentSum + currentPrice);
        }
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length === 0) {
            throw new Error("Нет товара в корзине");
        }
        if (!this.delivery) {
            throw new Error("Не указан способ доставки");
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'Apple', 10));
cart.addProduct(new Product(2, 'Chocolad', 20));
cart.addProduct(new Product(3, 'Cake', 30));
cart.deleteProduct(1);
cart.deleteProduct(2);
cart.deleteProduct(3);
cart.setDelivery(new HomeDelivery(new Date(), 'Lobnya'));
console.log(cart.getSum());
console.log(cart.checkout());
// class Cart {
//   _products: Product[] = [];
//   get products() {
//     return this._products;
//   }
//   addProduct(name: string, price: number, id: number) { 
//     this._products.push(new Product(name, price, id));
//   }
//   deleteProduct(name: string) {
//     this._products = this._products.filter(p => p.name !== name);
//   }
//   get getTotalPrice() {
//     let sum: number = 0;
//     this._products.map(el => sum += el.price)
//     return sum;
//   }
// }
// const cart = new Cart();
// cart.addProduct('Apple', 20, 1);
// cart.addProduct('Orange', 21, 2);
// cart.addProduct('Bread', 10, 3);
// // cart.deleteProduct('Apple');
// console.log(cart.getTotalPrice);
// console.log(cart.products);
