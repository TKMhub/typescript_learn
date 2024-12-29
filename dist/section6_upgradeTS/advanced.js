var _a, _b, _c;
// interface EngineerBlogger extends Engineer, Blogger {}
const quill2 = {
    name: "Quill",
    role: "front",
    follower: 111,
};
//⭐️TypeGuard（typeof演算子 in演算子 instanceof演算子）
function toUpperCase(x) {
    // x.toUpperCase(); →NG
    //⭐️typeof演算子・・・javaScript上の型しか扱うことができない→TSの型Object等を扱うことはできない
    if (typeof x === "string") {
        x.toUpperCase();
    }
    return "";
}
function describeProfile(nomadWorker) {
    // nomadWorker.role→NG
    console.log(nomadWorker.name);
    //in演算子・・・Engineerの中にroleが含まれる
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    //in演算子・・・Blogerの中にfollowerが含まれる
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = "dog";
    }
    speak() {
        console.log("bow-wow");
    }
}
class Bird {
    constructor() {
        this.kind = "bird";
    }
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}
function havePed(pet) {
    pet.speak();
    //⭐️タグ付きUnion （デザインパターン）
    //タグ変数を使って判別するのもあり;
    switch (pet.kind) {
        case "bird":
            pet.fly();
        case "dog":
            pet.speak();
    }
    //in演算子は文字列であるため、間違えてしまう可能性がある
    if ("fly" in pet) {
        pet.fly();
    }
    //⭐️instanceof演算子・・・クラス名にて比較することが可能
    //javaScriptに元々存在する演算子でしかない・・・interface等では代用不可
    if (pet instanceof Dog) {
        pet.speak();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePed(new Bird());
// <input id="input">にアクセス
//const input: HTMLElement・・・interface
const input0 = document.getElementById("input");
//⭐️型アサーション・・・強制的明示的型宣言
//⭐️型アサーション①<>
//React利用時にはタグを利用すると紛らわしくなる
const input1 = document.getElementById("input");
//⭐️型アサーション②as・・・基本こちらでOK
const input2 = document.getElementById("input");
// input0.value = "inital input value";→NG
input1.value = "inital input value";
input2.value = "inital input value";
//カッコを利用するやり方でも代入可能
document.getElementById("input").value = "afaf";
document.getElementById("input").value = "afaf";
//⭐️「!」 non-null assertion operator・・・nullの可能性がなくなる
//if文などで利用すると楽
//初期化の際や、if文の中で利用する
const input3 = document.getElementById("input");
const designer = {
    name: "Quill",
    //indexシグネチャにより、なんでも付け加えられるようになる
    role: "afaf",
    aaa: "aaa",
};
//indexシグネチャにより下記はエラーにならない
console.log(designer.bbb);
function toUpperCase2(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
//これだと、stringとnumberに関わる関数しか利用できない
const upperHello = toUpperCase2("hello");
const upperHello2 = toUpperCase2;
upperHello2("Hi");
upperHello2(2);
let intersectionFunc;
//オーバーローされる順番が変わる
let intersectionFunc2;
intersectionFunc = function (a, b) {
    return 0;
};
let unionFunc;
// let unionFunc: (a: never) => string | number;・・・neverとなるため、使えない（引数に何も入れれない？？？）・・・下記の記述であればOK
//FuncCでもFuncDでも入れることはできる。ただ、これを型を直接使う場合には、neverとなる
unionFunc = function (a) {
    return "hi";
};
unionFunc("hi");
//型アサーションでstringと明示すればOKではあるが、、、。
//開発者がわかっていれば、最初から型アサーションでOKだが、大変。。。
const upperHello1 = toUpperCase2("hello");
const downloadedData = {
    id: 1,
};
// ①オプショナルチェーンでエラーを回避
console.log(downloadedData.user.name);
// ②if文でエラーを回避
if (downloadedData.user) {
    console.log(downloadedData.user.name);
}
//⭐️オプショナルチェーン　③「?」でエラーを回避
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
//⭐️NullishCoalescingにてデフォルト値を入れる
//undefainf or nullの場合には、デフォルト値が入るようになる
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : "no-user（デフォルト値）";
const userData2 = downloadedData.user || "no-user（デフォルト値）"; //または三項演算子
// type TupleValue2 = TupleType[100];→NG
let target = "hello";
let source = "hello";
target = source;
// source = target; →NG
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
var Status;
(function (Status) {
    Status[Status["RED"] = 0] = "RED";
    Status[Status["BLUE"] = 1] = "BLUE";
})(Status || (Status = {}));
// let targe2: Color;
let targe2 = Color.RED;
let targe3 = Status.RED;
let source2 = 100;
// enum型の中にnumber型を入れることは例外的に可能・・・enum型は型安全上で問題があるので、慎重に利用する必要がある
targe2 = source2; //OK
source2 = targe2; //OK
// targe2 = targe3;・・・NG（名前で型を区別する）→enumについては名前的片付けと呼ばれている
let target10 = function (a, b) { };
let source10 = function (a) { };
target10 = source10; //OK
// source10 = target10; →NG　・・・型の安全が保障されないため
// →JavaScriptでは、引数が1つの場合にて引数が複数個指定されたとしても2つ目以降は無視されるという仕様がある
// 2 個の引数が必要ですが、0 個指定されました。ts(2554)
target10("hi", "hello");
class AdvancedPerson {
    constructor() {
        this.name = "Peter";
        this.age = 35;
    }
}
class AdvancedCar {
    constructor() {
        this.name = "Prius";
        this.age = 5;
    }
}
class AdvancedCar2 {
    constructor() {
        this.name = "Prius";
        //⭐️privateやprotectedがつくと、堅安全性が保たれなくなり、同様なクラス構成だとしても代入はできなくなる
        //→構造的型付ではなくて、名前的型付となる
        this.age = 5;
    }
}
let target100 = new AdvancedPerson();
let source100 = new AdvancedCar();
let source200 = new AdvancedCar2();
target100 = source100;
// target100 = source200;→NG（構造的型付ではなくて、名前的型付となる）
//⭐️レストパラメータ
//配列の場合
function advancedFn(...args) { }
advancedFn(0, 2, 3, 4, 5, 6);
//タプルもOK
//開発をする際に便利になるように配列の要素に名前をつけることができる。
//ホバーにて・・・(age: number, name?: string, pets?: boolean, ...scores: number[]
function advancedFn2(...args) {
    //プロパティ 'push' は型 'readonly [age: number, name?: string, pets?: boolean, ...scores: number[]]' に存在しません。
    // args.push();→NG
} //「？」オプショナルチェーンはお尻からつける
advancedFn2(0, "hi", false);
advancedFn2(0, "hi");
advancedFn2(0);
advancedFn2(0, "hi", false, 1, 2, 3, 4, 12345678, 1, 2);
//advancedFn2(0, "hi", 1, 2, 3, 4, 12345678, 1, 2); //エラー
//⭐️constアサーション
let milk = "milk";
let drink = milk; //let drink: "milk"
// const array: readonly [10, 20];
const array = [10, 20];
//objectにas constをつけたものをenumの代わりに使うこともある
// const peter: {
//   readonly name: "Peter";
//   readonly age: 38;
// };
const peter = {
    name: "Peter",
    age: 38,
};
typeof "hello";
//# sourceMappingURL=advanced.js.map