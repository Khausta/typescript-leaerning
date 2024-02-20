//
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


