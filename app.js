"use strict";
const user = {
    name: 'Vasya',
    email: 'vasya@mail.ru',
    login: 'vasya-vasya'
};
//обрати внимание на тип который выводится после проверок
function getId(id) {
    // if (typeof id === 'string') { //-- можем заменить type guard
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
// type guard  - это f-я
function isString(x) {
    return typeof x === 'string';
}
//type guard
function isAdmin(user) {
    return 'role' in user;
}
function sertRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('пользователь не является админом');
    }
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
