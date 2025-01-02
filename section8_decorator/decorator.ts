//⭐️decorator・・・クラスを装飾する開発者向けの機能（メタプログラミング）
//デコレータはインスタンスの生成時ではなく、クラスの定義時に実行されている

//デコレーターファクタリー
function Logging(message: string) {
  return function (constructor: Function) {
    console.log("Logging...");
    console.log(message);
    console.log(constructor);
  };
}
// function Logging(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }
function Component(template: string, selector: string) {
  return function <T extends { new (...args: any): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any) {
        super(...args);
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log("propertyLogging");
  console.log(target);
  console.log(propertyKey);
}
function enumerable(isEnumerable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDecorator
  ) {
    return {
      enumerable: isEnumerable,
    };
  };
}
function AccessorLogging(target: any, propertyKey: string) {
  console.log("propertyLogging");
  console.log(target);
  console.log(propertyKey);
}

function ParameterLogging(target: any, propertyKey: string) {
  console.log("propertyLogging");
  console.log(target);
  console.log(propertyKey);
}

//デコレータは複数同時に使用することができる・・・実行する順番としては、下から上に実行される
@Component("<h1>{{name}}</h1>", "#app")
@Logging("Logging User")
class User {
  @PropertyLogging
  static name2 = "Quill";
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}
@Component("<h1>{{name}}</h1>", "#app")
@Logging("Logging User")
class User2 {
  @PropertyLogging
  static name2 = "Quill";
  name = "Quill";
  constructor(private _age: number) {
    console.log("User was created!");
  }
  //⭐️AccessorLogging
  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this.age = value;
  }
  // @enumerable(false)
  greeting(message: string) {
    console.log("Hello");
  }
}

const user1 = new User();
