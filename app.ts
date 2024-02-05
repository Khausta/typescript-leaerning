const n: null = null; //только null приримает
const n1: any = null;
const n3: string = null; 
const n4: boolean = null; 
const n5: undefined = null; 
const n6: unknown = null; 

interface User {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: 'Vasya'
        } as User
    }
}

const user = getUser();
if (user) {
    const userName = user.name;
}



