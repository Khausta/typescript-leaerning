"use strict";
//classes
//creation classes
class User {
    constructor(nameOrAge, age) {
        if (typeof nameOrAge === "string") {
            this.name = nameOrAge;
        }
        else if (typeof nameOrAge === "number") {
            this.age = nameOrAge;
        }
        if (typeof age === "number") {
            this.age = age;
        }
    }
}
const user = new User('Vasy');
const user2 = new User(33);
const user3 = new User('VAsa', 33);
