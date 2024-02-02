// Voide

function logId(id: string | number) {
    console.log(id);
}

const a = logId(1); //a:void

function multiply(f: number, m?: number): number | void {
    if (!m) {
        return f*f;
    }
}

// Void case
type VoidFunc = () => void;

const f1: VoidFunc = () => {
    //ничего не возвращаем
}

const f2: VoidFunc = () => {
    return true //валидно, тк при void любой возврат функции игнорируется
}

const b = f2();//void type

const skills = ['Dev', 'Devops'];
const user = {
    s: ['s']
}

skills.forEach((skill) => user.s.push(skill));
console.log(user.s);
