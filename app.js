"use strict";
class UserBuilder {
    setName(name) {
        // setName(name: string): UserBuilder {  //так как возвращает сам себя класс, то UserBilder как тип может привести к коалихзиям
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    } //хорошо применить, елси нужно проверить является ли обьект инстансом определенного класса
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder().setName('Vasya'); //здесь this это UserBuilder
const res2 = new AdminBuilder().setName("Olga"); //здесь this это AdminBuilder
let user = new UserBuilder(); //юнион тип, поэтому при раюоте с кодом нуэно будет примениить сужение типов - Разделить
//поэтому используем Type Guard
if (user.isAdmin()) {
    console.log(user); //если в AdminBuilder убрать свойство roles, то здесь user определится как UserBuilder | AdminBuilder
}
else {
    console.log(user); //а здесь как never, тк в эту ветку мы не попадем никогда
    // ======= все потому что AdminBuilder и UserBuilder в данном случае являются одинаковыми
}
