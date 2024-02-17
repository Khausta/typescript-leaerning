"use strict";
class User {
    constructor() {
        this.name = "user";
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super();
        this.name = "admin";
        console.log(this.name);
    }
}
new Admin(); //user admin
class HttpError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
