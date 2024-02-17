class User {
  skills: string[];

  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === "string") {
      this.skills ? this.skills.push(skillOrSkills) : this.skills = [skillOrSkills]
    } else if (Array.isArray(skillOrSkills)) {
      this.skills ? this.skills = this.skills.concat(skillOrSkills) : this.skills = skillOrSkills
    } 
  }
}

const user = new User();
console.log(user);
user.addSkill('dev');
console.log(user);
user.addSkill(['devOps', 'design']);
console.log(user.skills);

function run(distance: number): number;
function run(distance: string): string;
function run(distance: number | string): string | number {
  return typeof distance === "number" ? 1 : "bombaleylo!"
}


