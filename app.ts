//Methods
enum PaymentStatus {
  Holded,
  Precessed,
  Reversed
}
class Payment {
  id: number;
  status: PaymentStatus;
  createAt: Date;
  updatedAt: Date;


  constructor(id: number) {
    this.id = id;
    this.status = PaymentStatus.Holded;
    this.createAt = new Date();
  }

  getPatmentLifeTime(): number {
    return new Date().getTime() - this.createAt.getTime();  
  }

  unholdPayment() {
    if (this.status == PaymentStatus.Precessed) {
      throw new Error('This payment can not be unholded')
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