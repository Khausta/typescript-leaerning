"use strict";
const skills = ['Dev', 'Design', 'Testing1', 'Testing2'];
// string[] - массив строк
//для неоднордных массивов есть два решения
// 1. any[] ---- ЭТО ПЛОХОЕ РЕШЕНИЕ, тк не смогли типизировать!
const skills2 = ['Dev', 'Design'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const res = skills
    .filter((s) => s !== 'Design')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(res);
