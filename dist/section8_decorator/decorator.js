//⭐️decorator・・・クラスを装飾する開発者向けの機能（メタプログラミング）
//デコレータはインスタンスの生成時ではなく、クラスの定義時に実行されている
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//デコレーターファクタリー
function Logging(message) {
    return function (constructor) {
        console.log("Logging...");
        console.log(message);
        console.log(constructor);
    };
}
// function Logging(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }
function Component(template, selector) {
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super(...args);
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector("h1").textContent = instance.name;
                }
            }
        };
    };
}
function PropertyLogging(target, propertyKey) {
    console.log("propertyLogging");
    console.log(target);
    console.log(propertyKey);
}
function enumerable(isEnumerable) {
    return function (target, propertyKey, descriptor) {
        return {
            enumerable: isEnumerable,
        };
    };
}
function AccessorLogging(target, propertyKey) {
    console.log("propertyLogging");
    console.log(target);
    console.log(propertyKey);
}
function ParameterLogging(target, propertyKey) {
    console.log("propertyLogging");
    console.log(target);
    console.log(propertyKey);
}
//デコレータは複数同時に使用することができる・・・実行する順番としては、下から上に実行される
let User = class User {
    constructor() {
        this.name = "Quill";
        console.log("User was created!");
    }
};
User.name2 = "Quill";
__decorate([
    PropertyLogging
], User, "name2", void 0);
User = __decorate([
    Component("<h1>{{name}}</h1>", "#app"),
    Logging("Logging User")
], User);
let User2 = class User2 {
    constructor(_age) {
        this._age = _age;
        this.name = "Quill";
        console.log("User was created!");
    }
    //⭐️AccessorLogging
    get age() {
        return this._age;
    }
    set age(value) {
        this.age = value;
    }
    // @enumerable(false)
    greeting(message) {
        console.log("Hello");
    }
};
User2.name2 = "Quill";
__decorate([
    AccessorLogging
], User2.prototype, "age", null);
__decorate([
    PropertyLogging
], User2, "name2", void 0);
User2 = __decorate([
    Component("<h1>{{name}}</h1>", "#app"),
    Logging("Logging User")
], User2);
const user1 = new User();
//# sourceMappingURL=decorator.js.map