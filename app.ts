// Unknown

let input: unknown;

input = 3;
input = 'ds';
input = ['sd', 'eww'];

// any принимает unknown, остлальные типы нет
// let b: string = input; //Type 'unknown' is not assignable to type 'string'
let b: any = input;

let c: unknown;
let d: any;
d = c;
c = d;


function run(i: unknown) {
    if (typeof i === 'number') {
        i++
    } else {
        i;
    }
}

run(input);

async function getData() {
    try {
        await fetch(''); //в ноде нет fetch, нужен дополнительный полифил
    } catch (error) {
        // console.log(error.message); --- не сработакт, так как type unknown
        //НУЖНА проверка
        if (error instanceof Error) {
            console.log(error.message);
        }
    } 
}


async function getData2() {
    try {
        await fetch(''); //в ноде нет fetch, нужен дополнительный полифил
    } catch (error) {
        //можем проверить через каст as
        //но если придет error в виде строки, а не класса Error то код упадет
        //старайся не использовать
        const e = error as Error;
        console.log(e.message);
    } 
}

type U1 = unknown | null; //U1 тип unknown потому что в union берется самый широкий тип

type I1 = unknown & string; //I1 тип string тк в Intersection берется самый узкий тип