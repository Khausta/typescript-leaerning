"use strict";
// Never
//то есть никаогда ничего не возвращает
// 1 case
function generateError(message) {
    throw new Error(message);
}
//2 case 
function dumpError() {
    while (true) { }
}
//3 case - с рекурсией
function rec() {
    return rec();
}
// const a: never; //- не валидно
// const a: never = 2; //-не валидно
// const a: never = null; //-не валидно
const a = undefined; //валидно
function processAction(action) {
    switch (action) {
        case 'refund':
            //...do something
            break;
        case 'checkout':
            //...do something
            break;
        case 'rejected':
            //...do something
            console.log('rejected');
            break;
        default:
            //чтобы обработать ошибку правильно
            // на этапе Compiler Time обрабатываем
            const _ = action; // _ означает переменную которую никогда не будем испольховать
            throw new Error('Нет такого action');
    }
}
processAction('rejected');
// processAction('gfd'); --- не скомпилируется файл
// case 5 - Исчерпывающая проверка - Exhaustive check
function isString(x) {
    if (typeof x === 'string') {
        return true;
        // } else {
        //     return false
        // } может юыть по другому
    }
    else if (typeof x === 'number') {
        return false;
    } // получается что остается третий вариант, который мы должны обработать
    //например добавить функцию типа never
    generateError('err oops');
}
