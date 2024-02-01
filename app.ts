// Interfaces


interface User {
    name: string;
    age: number;
    skills: string[],
    //если ожидается функция
    log: (id: number) => string
}


//first var
interface UserWithRole extends User {
    roleId: number
}


//second var
interface Role {
    role: string
}

interface UserWithRole2 extends User, Role {
    place: string,
    createdAt: Date
}


let user: UserWithRole = {
    name: 'sada',
    age: 22,
    skills: ['1', '2'],
    roleId: 1,
    
    log(id) {
        return this.name
    }
}

let user2: UserWithRole2 = {
    name: 'AS',
    age: 22,
    skills: ['1'],
    role: 'dev',
    place: 'MosDistrict',
    createdAt: new Date(),
    log(id) {
        return this.name
    }
}


//можем сделать type c функцией
type User2 = {
    name: string;
    age: number;
    skills: string[],

    log: (id: number) => string
}

// ИНДЕКСНЫЕ СВОЙСТВА (может быть использована в interface и type)
// например для словарей
interface UserDic {
    //ожидается неограниченное количество ключей, но значение должно быть типом User
    [index: number]: User
}

type UserDic2 = {
    //ожидается неограниченное количество ключей, но значение должно быть типом User
    [index: number]: User
}



