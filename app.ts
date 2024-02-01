//Type Alias
 
type httpMethod = 'post' | 'get'; //union
type coolString = string; //так определяется одельный тип

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
    // return fetch(url, method); //ts(2559) - why?
    return 1;
}


type User = {
    //эту типизацию можем вынести в Type Alias
    name: string;
    age: number;
    skills: string[]
}

// let user: {
//     //эту типизацию можем вынести в Type Alias
//     name: string;
//     age: number;
//     skills: string[]
// } = {
//     name: 'sada',
//     age: 22,
//     skills: ['1', '2']
// }
let user: User = {
    name: 'sada',
    age: 22,
    skills: ['1', '2']
}

//Intersection
//создаем еще один Type Alias
type Role = {
    id: number,
    name: string //пересекающаяся чать - ОБЩИЕ ПОЛЯ(если сравнить с User)
}

// type UserWithRole = User & Role; //лучше объединять отжельно
type UserWithRole = {
    user: User,
    role: Role
}
//совмещены два алиаса и требуются все ключи указанные в обоих алиасах
let user2: UserWithRole = {
    name: 'sada', //Object literal may only specify known properties, and 'name' does not exist in type 'UserWithRole'.ts(2353)
    age: 22,
    skills: ['1', '2'],
    id: 1
}