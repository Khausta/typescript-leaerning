function getFullName(userEntity: {firstname: string, surname: string}): string {
    // userEntity.skills - не можем обратиться 
    return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
    firstname: 'Anna',
    surname: 'Khaustova',
    city: 'Mos',
    age: 30,
    skills: {
        dev: true,
        design: true
    }
}

console.log(getFullName(user));