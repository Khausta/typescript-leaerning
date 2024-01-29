"use strict";
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArror = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
// function getFullName(firstname, surname) {
//     //такая явная проверка в ts может быть применена только в 2-х случаях:
//     // 1. Когда данные приходят из внешней системы
//     if (typeof firstname !== 'string') {
//         throw new Error('!!!');
//     }
//     return `${firstname} ${surname}`;
// }
console.log(getFullName("Anna", "Khaustova"));
