//Extends

type PaymentStatus = "new" | "paid";

class Payment {
  id: number;
  status: PaymentStatus = "new"

  constructor(id: number) {
    this.id = id
  }

  pay() {
    this.status = "paid";
  }
}

class PersistedPayment extends Payment {
  dataBaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id); //super обязателен если мы переопределяем коструктор
  }

  save() {
    //сохраняет в базу
  }

  override pay(date?: Date) { //шдентификатор override показывает, что мы перезаписываем метод
    // this.status = "paid";
    super.pay();
    if(date) {
      this.paidAt = date;
    }
  }
  
} 


// new PersistedPayment().pay();