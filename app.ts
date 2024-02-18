// Необходимо реализовать абстрактный класс Logger с 2-мя 
// методами абстрактным - log(message): void и printDate - 
// выводящий в log дату.
// К нему необходимо сделать реальный класс, 
// который бы имел метод: logWithDate,выводящий 
// сначала дату, а потом заданное сообщение

abstract class Logger {
  abstract log(message: string): void;

  printDate(date: Date): void {
   this.log(date.toString());
  }

 
}

class RealLogger extends Logger {
  log(message: string): void {
    console.log(message);
  }

  logWithDate(message: string): void {
    this.log(message);
    this.printDate(new Date());
  }
}

const log = new RealLogger();
log.logWithDate("message!");
  
