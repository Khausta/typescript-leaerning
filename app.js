"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
//пример наследования
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
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
    push(u) {
        this.users.push(u);
    }
}
//пример с изменение предметной области
class Payment {
}
//неверно, так как идет зависимость UserWithPayment от класса Payment 
// и любое добавление кода в UserWithPayment будет услоднять код
class UserWithPayment extends Payment {
}
//верный вариант с композицией
//это упростит код и уменьшит связанность, так как в предудцщем примере связанность уходит в дургой домэйн(DDD)
class UserWithPayment2 {
    constructor(user, payment) {
        this.user = user;
        this.payment = payment;
    }
}
