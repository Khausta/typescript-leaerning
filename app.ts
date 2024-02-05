// Type Guard
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

interface Admin {
    name: string;
    role: number
}


//обрати внимание на тип который выводится после проверок
function getId(id: number | string) {
    // if (typeof id === 'string') { //-- можем заменить type guard
    if (isString(id)) {
        console.log(id)
    } else {
        console.log(id);
    }
    
 }


 // type guard  - это f-я
 function isString(x: string | number): x is string { //вернут true или false
    return typeof x === 'string';
 }

 //type guard
 function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
 }

 function sertRoleZero(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('пользователь не является админом');
    }
 }

 function isAdminAlternative(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
 }






