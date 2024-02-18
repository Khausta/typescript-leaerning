"use strict";
// Необходимо реализовать абстрактный класс Logger с 2-мя 
// методами абстрактным - log(message): void и printDate - 
// выводящий в log дату.
// К нему необходимо сделать реальный класс, 
// который бы имел метод: logWithDate,выводящий 
// сначала дату, а потом заданное сообщение
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class RealLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.log(message);
        this.printDate(new Date());
    }
}
const log = new RealLogger();
log.logWithDate("message!");
