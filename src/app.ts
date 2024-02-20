const numbers: Array<number> = [1, 2, 3];

async function test() {
  const res = await new Promise<number>((resolve, reject) => {
    resolve(1);
  })
}

//правильная реализация неограниченного числа строк
const check: Record<string, boolean> = {
  drive: true,
  kpp: true
}

//пример функции generic
function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

const res = logMiddleware<number>(2);



function getSplitedHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

getSplitedHalf<number>([1, 3, 5]);

function toString<T>(data: T): string | undefined  {
  switch(typeof data) {
    case 'string':
      return data;
    case 'number': 
    case 'bigint':
    case 'function':
    case 'boolean':
    case 'symbol':
      return data.toString();
    case 'object':
      return JSON.stringify(data);
    default:
      return undefined;
  }
}

console.log(toString([1, 2, 3]));
// console.log(toString<number>('dsf')); //<--- подсвечивает ошибку


