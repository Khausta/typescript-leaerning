"use strict";
//Methods
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Precessed"] = 1] = "Precessed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.id = id;
        this.status = PaymentStatus.Holded;
        this.createAt = new Date();
    }
    getPatmentLifeTime() {
        return new Date().getTime() - this.createAt.getTime();
    }
    unholdPayment() {
        if (this.status == PaymentStatus.Precessed) {
            throw new Error('This payment can not be unholded');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPatmentLifeTime();
console.log(time);
