class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

//пример наследования
class Users extends Array<User> { //здесь мы смешали бизнес-единицу Users и некоторые утилитарные типы(слудебные встроенные типв как массивы) 
  searchByName(name: string) {
    return this.filter(u => u.name === name);
  }

  override toString(): string { //если нет перезаписи, то результатом такого мтода будет [object Object]
    return this.map(u => u.name).join(', ');
  }
}

const users = new Users();
users.push(new User("Vasy"));
users.push(new User("Oleg"));
console.log(users.toString()); //[object Object] -- в таком случае мы можем для таких методов override ьетоды сделать


//пример композиции
//чтобы не смешивать утилитарные методы с бизнес единицами
//в композиции должно быть несколько элементов
class UserList {
  users: User[]

  push(u: User) {
    this.users.push(u);
  }
}

//пример с изменение предметной области
class Payment {
  date: Date;
}

//неверно, так как идет зависимость UserWithPayment от класса Payment 
// и любое добавление кода в UserWithPayment будет услоднять код
class UserWithPayment extends Payment {
  name: string
}

//верный вариант с композицией
//это упростит код и уменьшит связанность, так как в предудцщем примере связанность уходит в дургой домэйн(DDD)
class UserWithPayment2 {
  user: User;
  payment: Payment;

  constructor(user: User, payment: Payment) {
    this.user = user;
    this.payment = payment;
  }
}