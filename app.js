"use strict";
// Voide
function logId(id) {
    console.log(id);
}
const a = logId(1); //a:void
function multiply(f, m) {
    if (!m) {
        return f * f;
    }
}
const f1 = () => {
    //ничего не возвращаем
};
const f2 = () => {
    return true; //валидно, тк при void любой возврат функции игнорируется
};
const b = f2(); //void type
const skills = ['Dev', 'Devops'];
const user = {
    s: ['s']
};
skills.forEach((skill) => user.s.push(skill));
console.log(user.s);
