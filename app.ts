//ПРиведение типов

let a: number = 5;
let s: string = a.toString();
let s1: string = new String(a).valueOf();
let booleanVar: boolean = new Boolean(a).valueOf();

let b: string = '12';
let n: number = Number(b);
let c = 'sdf';
let m: number = parseInt(b);

interface User {
    name: string;
    email: string;
    login: string;
}

const user: User = {
    name: 'Vasya',
    email: 'vasya@mail.ru',
    login: 'vasya-vasya'
} 

//вместо <User> используй as User тк в react зарезервино в компоненте

interface Admin {
    name: string;
    role: number
}

//так лучше не преобразовать тк обращаясь к admin мы получаем только свойства которые есть в Admin
//то есть email не получим, но в js будет инфо - так делать плохо
const admin: Admin = {
    ...user,
    role: 1
}

// как правильо преобразовать
function userToAdmin(user: User): Admin {
    return {
        name: user.login, 
        role: 1
    }
}


