"use strict";
//допустим с сервера приходит объект и мы не хнаем что там будет
const a = {};
assertUser(a);
a.name = 'Vasya';
function assertUser(obj) {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Не польхователь');
}
