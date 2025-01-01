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
let User = class User {
    constructor() {
        this.name = "Quill";
        console.log("User was created!");
    }
};
User = __decorate([
    Logging("Logging User")
], User);
const user1 = new User();
//# sourceMappingURL=decorator.js.map