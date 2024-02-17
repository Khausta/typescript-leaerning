class Vehicle {
  public make: string //пуцбличное свойство, в некоторых кодстайлах может бвть требованпи явного указания (например --- public make: string)
  private damages: string[]
  private _model: string;
  protected run: number; //недоступно для использования извне, но доступно для наследования
  #price: number;

  addDamage(damage: string) {
    this.damages.push(damage);
  }

  set model(m: string) {
    this._model = m;
    this.#price = 100;
  }

  get model() {
    return this._model;
  }

  isPriceEqual(v: Vehicle) {
    return this.#price === v.#price; //!!! ттак мы можем обратиться к приватному свойству, если передали аргументом
  }
}


class EuroTrack extends Vehicle {
  setDamage() {
    // не доступны свойства damages и _model тк приватные
  }

  setRun(km: number) {
    this.run = km / 0.62;
    // this.damage --- Property 'damage' does not exist on type 'EuroTrack' 
  }

  // setPrice() {
  //   this.#price   ----  Property '#price' is not accessible outside class 'Vehicle' because it has a private identifier.ts(18013)
  // }
}
new Vehicle().make = 'm';
// new Vehicle()