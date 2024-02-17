"use strict";
//getter and setter
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class User {
    set login(l) {
        this._login = 'user-' + l;
        this.createdAt = new Date(); //это назывется side effect
    }
    //если нет setter то свойство readonly
    get login() {
        return 'not-login';
    }
    //с get и set нельзя использовать асинхронный код,
    // но при работе с паролями, например, использовать асинхроннве методы можно
    setPassord() {
        return __awaiter(this, void 0, void 0, function* () {
            //...code 
            //   await...
        });
    }
}
const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);
