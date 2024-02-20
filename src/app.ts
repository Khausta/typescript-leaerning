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