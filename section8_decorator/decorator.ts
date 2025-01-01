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

//デコレータは複数同時に使用することができる・・・実行する順番としては、下から上に実行される
@Component("<h1>{{name}}</h1>", "#app")
@Logging("Logging User")
class User {
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}

const user1 = new User();
