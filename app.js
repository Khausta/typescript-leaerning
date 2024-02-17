"use strict";
//Extends
class Payment {
    constructor(id) {
        this.status = "new";
        this.id = id;
    }
    pay() {
        this.status = "paid";
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id); //super обязателен если мы переопределяем коструктор
    }
    save() {
        //сохраняет в базу
    }
    pay(date) {
        // this.status = "paid";
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
// new PersistedPayment().pay();
