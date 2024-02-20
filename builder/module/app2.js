"use strict";
let a = 5;
const A = {
    a: 23,
    test() {
        return function () {
            // this.a = 3;
            A.a = 3;
        };
    }
};
function crer(user) {
    switch (user.role) {
        case 'admin':
            a = 2;
            break;
        case 'user':
            a = 3;
    }
}
