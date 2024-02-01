//Narrowing
function logId(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    } else if (typeof id === 'boolean') {
        console.log(id)
    } else (
        console.log(id)
    )
}

logId(1);
logId('Id');
logId(true);


function logError(err: string | string[]) {
    if(Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}

//Narrowing down a type of obj
function logObj(obj: {a: number} | {b: number}) {
    if('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

function logMultipleIds(a: string | number, b: string | boolean) {
    //сравниваем по общему типу
    if (a === b) {
        console.log(a, b);
    } else if(typeof a === 'number') {
        console.log(a / 2);
    } else {
        console.log(b);//string or boolean! нужно точно проверить чтобы применить методы string
    }
}

const a = 1; //a тип 1(удиница)
let c = 2; //c тип number
let b:3 = 3; //так можно указать тип 3 и исменить не сможем
b = 3; //можно
// b = 4; //выдаст ошабку то тип 4 не является типом 3

