"use strict";
//
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
