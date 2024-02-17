//getter and setter

class User {
  _login: string;
  password: string;
  createdAt: Date;

  set login(l: string) {
    this._login = 'user-' + l;
    this.createdAt = new Date(); //это назывется side effect
  }
  //если нет setter то свойство readonly

  get login() {
    return 'not-login';
  }
  //с get и set нельзя использовать асинхронный код,
  // но при работе с паролями, например, использовать асинхроннве методы можно
  async setPassord() {
    //...code 
    //   await...
  }
}

const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);

