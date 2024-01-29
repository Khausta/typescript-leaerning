function getFullName(firstname: string, surname: string): string {
    return `${firstname} ${surname}`;
}

const getFullNameArror = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`;
}

// function getFullName(firstname, surname) {
//     //такая явная проверка в ts может быть применена только в 2-х случаях:
//     // 1. Когда данные приходят из внешней системы
    
//     if (typeof firstname !== 'string') {
//         throw new Error('!!!');
//     }
//     return `${firstname} ${surname}`;
// }

console.log(getFullName("Anna", "Khaustova"));