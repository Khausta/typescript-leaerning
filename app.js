"use strict";
//implements
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Logger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            //кинуть что-то во внешнюю систему
            console.log(...args);
        });
    }
}
class User {
    delete() {
        throw new Error('Method not implemented.');
    }
    pay(paymentId) {
        ///
    }
}
class Dictionary {
    sayNumber(num) {
        console.log(num);
        return num;
    }
    sayHi(...args) {
        console.log(...args);
        return "Hi";
    }
}
const dic = new Dictionary();
dic.sayNumber(2);
dic.sayHi('dkjfl', 'dsf');
