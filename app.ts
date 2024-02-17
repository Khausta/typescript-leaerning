
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
  constructor(
    public id: number,
    public title: string,
    public price: number,
  ) {}
}

class Delivery {
  constructor(
    public date: Date
  ) {}
}

class HomeDelivery extends Delivery {
  constructor( date: Date, public address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor( date: Date, public marketId: number) {
    super(new Date());

  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions;

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter((product: Product) => product.id !== productId);
  }

  public getSum(): number | void {
    if(this.products.length) {
      return this.products
        .map((p: Product) => p.price)
        .reduce((currentSum: number, currentPrice: number): number => currentSum + currentPrice)
    }
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  public checkout() {
    if(this.products.length === 0) {
      throw new Error("Нет товара в корзине")
    } 
    if (!this.delivery) {
      throw new Error("Не указан способ доставки")
    }
    return {success: true};
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




