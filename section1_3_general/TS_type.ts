// ⭐️type annotation　型注釈
let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -3.14;
let double: string = "hello";
let single: string = "hello";
let back: string = `hello`;
// 型推論ができない場合
// 　・初期化しない場合
// 　・数値や文字列等を入れてしまう場合

//⭐️型推論　　　※毎回型推論でOK
let back2 = `hello`;
// back2 = 2 →×

//⭐️オブジェクトに型（型注釈）
const person100: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 21,
};
// console.log(person.gender);・・・genderはなし

// objectという型は全般なので、キーの情報はない・・・あまり使わない
const person2: object = {
  name: "Jack",
  age: 21,
};

const person3 = {
  name: { firstName: "Jack", lastName: "xxx" },
  age: 21,
};

//⭐️配列
const fluits: string[] = ["Apple", "Banana", "grape"];
const fluits2: any[] = ["Apple", "Banana", "grape"];
const fluits3: (string | number)[] = ["Apple", "Banana", "grape", 1];
// const fuluits: string[] = ["Apple", "Banana", "grape", 1]; →×
//fluits.forEach()

//⭐️タプル   配列の強化版で、オブジェクトには劣るイメージ
const book: [string, number, boolean] = ["Business", 1500, false];
// ※タプルでは型推論してくれない→必ず型推論
book.push(21); //これはOK・・・TypeScriptでhじゃ初期値に厳しい

// ⭐️Enum型（列挙型）
enum CoffeSize {
  SHORT = "SHORT",
  TALL = "TALL",
}

const coffe = {
  hot: true,
  size: CoffeSize.SHORT,
};

// coffe.size = true  →エラー
// coffe.size = 'SHORT'  →エラー
coffe.size = CoffeSize.SHORT; //→OK

enum CoffeSize2 { //OK（メモリの縮小）
  SHORT,
  TALL,
}
enum CoffeSize3 { //OK（メモリの縮小）
  SHORT = 2,
  TALL,
}
// enum CoffeSize4 { //NG
//   SHORT = "string",
//   TALL,
// }

const coffe2 = {
  hot: true,
  size: CoffeSize2.SHORT, //→0, 1, ...となる
};

//⭐️any型・・・なんでも入る
//JSをTSに移行する際には有効であるが、正しくタイプスクリプトを描きたい場合はなるべく使わない
let anything: any = true;
anything = "hello";
anything = 1;
anything = {};
anything.a = "hello"; //オブジェクトへの代入（基本的にはありえない）
let banana: string = "banana";
banana = anything; //OK

// ⭐️Union型
let unionType: number | string = 10;
// unionType.toUpperCase() →エラー
unionType = "Hello";
unionType.toUpperCase();

let unionTypes: (number | string)[] = [21, "Hello"];

// ⭐️literal型
const apple: "apple" = "apple"; //appleのみ
// const apple2: "apple" = "a";  →×
// ※シングルクウォート、ダブルクウォート・・・OK
const banana2 = "banana"; //・・・literal型となる

// どういう時に利用？
// "small" or "medium" or "large" or "small"
let clothSaze: "small" | "medium" | "large" = "small";
const cloth = {
  color: "white",
  size: clothSaze, //literal型になる
};
// cloth.size = "large"; →NG
const cloth2: {
  //こっちのがベター！
  color: "white";
  size: "small" | "medium" | "large"; //literal型になる
} = {
  color: "white",
  size: clothSaze, //literal型になる
};
cloth2.size = "large";

//⭐️Typeエイリアス
type ClothSize = "S" | "M" | "L";
let ClothSize: ClothSize = "L";
const cloth3: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: "L",
};

//⭐️関数の型
// パラメータには必ず型をつけて
// 戻り値には型推論が効くのでなくてOK・・・ドキュメントとして扱うならあっても良いくらい
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 3);
// add("string", 3); →NG

//戻り値がない場合にはvoid型となる・・・undefindが返ってくる
function sayHello() {
  console.log("Hello");
}
//NG　これはダメ！ undefindを戻り値にするのはダメ！・・・使える？？
function sayHello2(): undefined {
  console.log("Hello");
}
function sayHello3(): undefined {
  console.log("Hello");
  return;
}
function sayHello4(): void {
  console.log("Hello");
}
function sayHello5(): void {
  console.log("Hello");
  return;
}

// ⭐️undefind型（滅多に使わない） → voidを使う！！！
//型注釈しない場合にはanyになるのでなくてOK
//明示的にundefinedを返したい場合、かつドキュメントとしたい場合にはこちらを使う
let tmp: undefined;

//⭐️never型（型推論ではvoid）
//決して何も返さない
function error(message: string): never {
  throw new Error(message);
}
console.log(error("this is an error"));

//型推論でnever
const error2 = function error(message: string) {
  throw new Error(message);
};
