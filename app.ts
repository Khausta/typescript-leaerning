// Static properties
class UserService {
  static db: any; //может быть private or protected

  //может быть использовано async await
  // например static async getUserById(id: number) { ...await new Promise() }
  static getUserById(id: number) {
    // return this.db.findById(id);
    return UserService.db.findById(id); 

  }

  create() {
    UserService.db;
  }

  //пример со статичным блоком кода
  static {
    UserService.db = 'fd';
    //здесь при инициализации сразу происходит присвоение.
    // async await не можем испольховать
  }
}

UserService.db //статические свойства можно использовать без инстанциирования и мы можем обращаться как к объекту
UserService.getUserById(1); //к статичному методу класса можно обращаться как к методу объекта
// UserService.create(); --- Ошибка, не можем получить доступ к нестатичному свойству без истанциирования
// НО! Можем получить доступ к статичному методу через нестатичный метод 
const inst = new UserService();
inst.create();









