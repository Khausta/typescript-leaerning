//classes
//creation classes

class User {
  name: string

  constructor (name) {
    this.name = name
  }
}

const user = new User('Vasy');
console.log(user);
user.name = 'Olga';
console.log(user);
const user1 = new User('Lala');
console.log(user1);

class Admin {
  // role!: number //можно использовать оператор ! или отключить в конфиге strictPropertyInitialization (поставить false)
  role: number
}



