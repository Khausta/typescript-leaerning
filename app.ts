const skill: [number, string] = [1, 'Dev'];

const id = skill[0];
const skillName = skill[1];
// const skillLevel = skill[2]; -- не можем обраться

//после пуша также не можем обратьться к третьему элеенту, так как тип tupple
skill.push('rejgt');
console.log(skill);
// const q = skill[3]; 
skill.pop();

const [skillId, skillname] = skill;

const arr: [number, string, ...boolean[] ] = [1, 'say Yeeeeah', true, false, true];
const arr2: [number, string, ...number[] ] = [1, 'say Yeeeeah', 3];



