// Interfaces VS Types

// 1 отличие
interface User {
    name: string;
}

interface User {
    id: number
} // перезапись

// это может вводить в заблуждении при codereview!
// удобно, если использовать стороннюю библиотеку и 
//нет возможности заэкстендить како-то интерфейс
const user: User = {
    name: 'kljfd',
    id: 2
}

//будет ошибка. Types не перезаписываются
type User1 = {
    name: string
}

// type User1 = {
//     id: number
// }               //Duplicate identifier 'User1'.ts(2300)

// в type можем использовать union
type ID = string | number; 

interface IDI {
    ID: string | number
}


