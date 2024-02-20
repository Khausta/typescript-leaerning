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

const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf; //использование в типах


//испольхование интерфейса вмесете с generic
interface ILogLine<T> {
  timeStamp: Date,
  data: T
}
const logLine: ILogLine< {a: number} > = {
  timeStamp: new Date(),
  data: {
    a: 1
  }
}


//испольхование тайпов вмесете с generic
type LogLineType<T> = {
  timeStamp: Date,
  data: T
}
const logLine2: LogLineType< {a: number} > = {
  timeStamp: new Date(),
  data: {
    a: 1
  }
}



