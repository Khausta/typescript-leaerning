"use strict";
//ПРиведение типов
let a = 5;
let s = a.toString();
let s1 = new String(a).valueOf();
let booleanVar = new Boolean(a).valueOf();
let b = '12';
let n = Number(b);
let c = 'sdf';
let m = parseInt(b);
const user = {
    name: 'Vasya',
    email: 'vasya@mail.ru',
    login: 'vasya-vasya'
};
//так лучше не преобразовать тк обращаясь к admin мы получаем только свойства которые есть в Admin
//то есть email не получим, но в js будет инфо - так делать плохо
const admin = Object.assign(Object.assign({}, user), { role: 1 });
// как правильо преобразовать
function userToAdmin(user) {
    return {
        name: user.login,
        role: 1
    };
}
