//контекст, this

//примеры где с окнтекстом нужно рабоать аккуратно
class Payment {
  private date: Date  = new Date();

  getDate() {
    return this.date;
  }
}

const payment = new Payment();
// console.log(payment.getDate());//2024-02-18T12:09:25.940Z
//пока все ок

const user = {
  id: 1,
  paymentDate: payment.getDate
}

// console.log(user.paymentDate()); //undefined, тк мы потеряля контекст
// поэтому используй bind чтобы привязать контекст

const user2 = {
  id: 1,
  paymentDate: payment.getDate.bind(payment)
}

// console.log(user2.paymentDate());//2024-02-18T12:09:25.940Z -- все ок

// но в TypeScript используй this как аргумент в методе класса

class Payment2 {
  private date: Date = new Date();

  getDate(this: Payment2) { // <==================================== важно. это первй способ не терять контекст
    return this.date;
  }

  getDateArrow = () => { // <============================ второй способ не терять контеекст - стролочные функции
    return this.date;
  }

}

const payment2 = new Payment2();

const user3 = {
  id: 1,
  paymentDate: payment2.getDate.bind(payment2),
  paymentDateArrow: payment2.getDateArrow
}

// console.log(user3.paymentDate()); //все ок
// console.log(user3.paymentDateArrow()); //все ок

// СО СТРЕЛОЧНЫМИ ФУНКЦИЯМИ ПРИМЕР не всегда срабатывает
class PeymentPersistent extends Payment2 {
  save() {
    return super.getDate();
  }
}

console.log(new PeymentPersistent().save());//все работает
// теперь заменим  return super.getDate() на arrow
class PeymentPersistent2 extends Payment2 {
  save() {
    // return super.getDateArrow();   //TypeError: (intermediate value).getDateArrow is not a function
    return this.getDateArrow();   //если super заменить на this --- ok
  }
}

console.log(new PeymentPersistent2().save());










