"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const numbers = [1, 2, 3];
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield new Promise((resolve, reject) => {
            resolve(1);
        });
    });
}
//правильная реализация неограниченного числа строк
const check = {
    drive: true,
    kpp: true
};
//пример функции generic
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res = logMiddleware(2);
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
getSplitedHalf([1, 3, 5]);
