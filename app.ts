// Type Guard
interface User {
    name: string;
}

//допустим с сервера приходит объект и мы не хнаем что там будет
const a = {};

assertUser(a);
a.name = 'Vasya';

function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    } 
    throw new Error('Не польхователь');
}



