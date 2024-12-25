// const human: {
//   name: string;
//   age: number;
// } = {
//   name: "Quill",
//   age: 38,
// };
const human10 = {
    name: "Quill",
    age: 38,
};
let developer10;
const human = {
    name: "Quill",
    age: 38,
    greeting(message) {
        console.log(message);
    },
};
let developer;
//⭐️implementsを使用して、クラスに対してinterfaceのい条件を適応させる方法
//extendsしていても、implementsを実装することは可能
//staticについては型定義できないので注意
// クラス 'Developer' はインターフェイス 'Human' を正しく実装していません。
class Developer {
    // publicとreadonlyのみOK   ※private, protectedはダメ！
    //型を満たしていればOKなので、変数名が異なってもOK
    constructor(name, age, experience //これはinterfaceにはない
    ) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    //⭐️パラメータにも"?"を付け加えることができる
    // greeting(message?: string): void {
    //⭐️デフォルト引数・・・パラメータが存在しない場合にはデフォルトで"Hello"となる
    greeting(message = "Hello") {
        if (message) {
            console.log(message);
        }
    }
}
// class Developer2 implements Human {
//   name?: string;
//   constractor(
//     public age: number,
//     public experience: number,
//     initName?: string
//   ) {
//     if (initName) {
//       this.name = initName;
//     }
//   }
// }
const tmpDeveloper = {
    name: "Quill",
    age: 38,
    //⭐️オプショナルパラメータ・・・あってもなくてもいい
    greeting(message) {
        console.log(message);
    },
};
//⭐️TypeScriptの構造的部分型・・・引数側の整合性があっていればOK
//下記は同義である
//構造的部分型・・・制限が緩い型に対しては制限が厳しい型を入れることができる
const user = new Developer("Quill", 38, 3);
const user10 = tmpDeveloper;
//⭐️readonlyのために読み取り専用となっている
//※初期化時のname, コンストラクタのnameについては問題なし
// user.name = "a"; NG
let develop = new Developer("Quill", 38, 3);
let develop2 = new Developer("Quill", 38, 3);
// コンストラクタのnameについてhpublicとなっているために、変更可能
// ※implementsされているところのreadonlyは無視することが可能
develop.name = "aaa";
const namable = {
    name: "Quill",
    //nickNameはあってもなくても良くなる
};
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
//# sourceMappingURL=interface.js.map