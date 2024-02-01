// Optional

//если какое-то свойство мы можем не передать используй "?" после ключа 
interface User {
    name: string,
    password?: string
}

const user1: User = {
    name: 'sdfd',
    password: 'dfgkj@'
}
//тоже валидно
const user2: User = {
    name: 'sdfd'
}

type Role = {
    role: string,
    roleId?: number
}

const user3: Role = {
    role: 'Admin'
}

// что с Undefined
interface Product {
    origin: string,
    discount: number | undefined  //нужно будет обязательно это свойто указывать в объектах
}

const lenovo2134: Product = {
    origin: 'Japan',
    //нужно явно указать undefined если нет discount
    discount: 25
}


//здесь  second?: number ЭКВИВАЛЕНТНО second: number | undefined
function multiply(first: number, second?: number): number {
    if(!second) {
        return first * first;
    }
    return first * second;
}

//можем указать дефолтное значение, если нам не передали значение second
function multiply2(first: number, second: number = 5): number {
    return first * second;
}

multiply(5);
multiply(2, 2);




interface UserPro {
    name: string;
    password?: {
        type: 'primary' | 'secondary'
    };
}

function testPass(user: UserPro) {
    const t = user.password?.type;
    // эквивалент
    const t2 = user.password ? user.password.type : undefined;
}

// ?? - проверка значения перед ?? на null or undefined
function test(param?: string) {
    const t = param ?? multiply(2);
}

// ! - кога уверены что точно будет свойсвто
interface User0 {
    name: string;
    password?: {
        type: 'primary' | 'secondary'
    };
}

function testUser(user: User0) {
    const t = user.password!.type;
}
