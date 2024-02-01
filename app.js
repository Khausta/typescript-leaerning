"use strict";
// Optional
const user1 = {
    name: 'sdfd',
    password: 'dfgkj@'
};
//тоже валидно
const user2 = {
    name: 'sdfd'
};
const user3 = {
    role: 'Admin'
};
const lenovo2134 = {
    origin: 'Japan',
    //нужно явно указать undefined если нет discount
    discount: 25
};
//здесь  second?: number ЭКВИВАЛЕНТНО second: number | undefined
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
//можем указать дефолтное значение, если нам не передали значение second
function multiply2(first, second = 5) {
    return first * second;
}
multiply(5);
multiply(2, 2);
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    // эквивалент
    const t2 = user.password ? user.password.type : undefined;
}
// ?? - проверка значения перед ?? на null or undefined
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(2);
}
function testUser(user) {
    const t = user.password.type;
}
