"use strict";
class User {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === "string") {
            this.skills ? this.skills.push(skillOrSkills) : this.skills = [skillOrSkills];
        }
        else if (Array.isArray(skillOrSkills)) {
            this.skills ? this.skills = this.skills.concat(skillOrSkills) : this.skills = skillOrSkills;
        }
    }
}
const user = new User();
console.log(user);
user.addSkill('dev');
console.log(user);
user.addSkill(['devOps', 'design']);
console.log(user.skills);
function run(distance) {
    return typeof distance === "number" ? 1 : "bombaleylo!";
}
