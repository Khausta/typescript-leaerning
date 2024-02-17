//implements

interface ILog {
  // log(...args): void;
  log: (...args) => void; //возможны два варианта
  error(...args): void;
}

class Logger implements ILog {
  log(...args: any[]) {
    console.log(...args)
  }
  async error(...args: any[]): Promise<void> {
    //кинуть что-то во внешнюю систему
    console.log(...args)
  }
}

interface IPayable {
  pay(paymentId: number): void;
  price?: number;
}

interface IDeletable {
  delete(): void;
}

class User implements IPayable, IDeletable {
  delete(): void {
    throw new Error('Method not implemented.');
  }

  pay(paymentId: number | string): void {
    ///
  }
}


interface ISay {
  sayHi(...args): string;
}

interface INumber {
  sayNumber(num): number;
}

class Dictionary implements ISay, INumber  {
  sayNumber(num: any): number {
    console.log(num);
    return num;
  }
  sayHi(...args: any[]): string {
    console.log(...args);
    return "Hi";
  }
}

const dic = new Dictionary();
dic.sayNumber(2);
dic.sayHi('dkjfl', 'dsf');   

