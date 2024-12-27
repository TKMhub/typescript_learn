type Engineer = {
  name: string;
  role: string;
  //   afaf: string;
};

type Blogger = {
  name: string;
  follower: number;
};

//⭐️インターセクション型（エンジニアブロガー）
type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger {}

const quill2: EngineerBlogger = {
  name: "Quill",
  role: "front",
  follower: 111,
};

//type tmp = never
type tmp = string & number;

//numberまたはbool / stringまたはnumber　→number 集合の考え方
type NumberBoolean = number | boolean;
type StringNumber = number | String;

type Mix = NumberBoolean & StringNumber;

//⭐️TypeGuard（typeof演算子 in演算子 instanceof演算子）
function toUpperCase(x: string | number) {
  // x.toUpperCase(); →NG
  //⭐️typeof演算子・・・javaScript上の型しか扱うことができない→TSの型Object等を扱うことはできない
  if (typeof x === "string") {
    x.toUpperCase();
  }
  return "";
}

//⭐️in演算子・・・nomadWokerという変数のroleが存在するか
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
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
  kind: "dog" = "dog";
  speak() {
    console.log("bow-wow");
  }
}
class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;
function havePed(pet: Pet) {
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
const input0: HTMLElement = document.getElementById("input");

//⭐️型アサーション・・・強制的明示的型宣言
//⭐️型アサーション①<>
//React利用時にはタグを利用すると紛らわしくなる
const input1 = <HTMLInputElement>document.getElementById("input");
//⭐️型アサーション②as・・・基本こちらでOK
const input2 = document.getElementById("input") as HTMLInputElement;
// input0.value = "inital input value";→NG
input1.value = "inital input value";
input2.value = "inital input value";

//カッコを利用するやり方でも代入可能
(<HTMLInputElement>document.getElementById("input")).value = "afaf";
(document.getElementById("input") as HTMLInputElement).value = "afaf";

//⭐️「!」 non-null assertion operator・・・nullの可能性がなくなる
//if文などで利用すると楽
//初期化の際や、if文の中で利用する
const input3 = document.getElementById("input")!;

//⭐️indexシグネチャ
interface Designer {
  name: string;
  //indexシグネチャを使うと、他のものも全て型を揃える必要がある
  [index: string]: string;
}

const designer: Designer = {
  name: "Quill",
  //indexシグネチャにより、なんでも付け加えられるようになる
  role: "afaf",
  aaa: "aaa",
};

//indexシグネチャにより下記はエラーにならない
console.log(designer.bbb);

//⭐️関数のオーバーロード・・・関数定義の上にstringだったらstringを返すと定義することができる
//オーバーロードする場合にはデフォルトの型などその他の型を認識しなくなる
//順番によって優先順位が変わる。上から順番に先に当てはまったものが最優先
//関数のオーバーロードは元の関数がとりえる型しか定義することはできない
//元の関数の型に当てはまれば、処理の内容に関わらず、型を定義することができるため、処理の内容に注意
//オーバーロードの場合、functionにより関数宣言をする必要がある
//もしstringだったらstring
function toUpperCase2(x: string): string;
//もしnumberだったらnumber
function toUpperCase2(x: number): number;
function toUpperCase2(x: string | number) {
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

interface TmpFunc {
  (x: string): string;
  (x: number): number;
}
//⭐️オーバーロード応用：オーバーロードに全てに対応した関数を書かなければならない
// const upperHello3: TmpFunc = function (x: string | number) {
//   return 0;
// };

//⭐️関数型のインターセクション型
interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface FuncB {
  (a: string): number;
}
let intersectionFunc: FuncA & FuncB;
//オーバーローされる順番が変わる
let intersectionFunc2: FuncB & FuncA;
intersectionFunc = function (a: number | string, b?: number | string) {
  return 0;
};

//関数型のユニオン型・・・引数→インターセクション型、戻り値はユニオン型
interface FuncC {
  (a: number): number;
}
interface FuncD {
  (a: string): string;
}

let unionFunc: FuncC | FuncD;
// let unionFunc: (a: never) => string | number;・・・neverとなるため、使えない（引数に何も入れれない？？？）・・・下記の記述であればOK
//FuncCでもFuncDでも入れることはできる。ただ、これを型を直接使う場合には、neverとなる
unionFunc = function (a: string) {
  return "hi";
};
unionFunc("hi");

//型アサーションでstringと明示すればOKではあるが、、、。
//開発者がわかっていれば、最初から型アサーションでOKだが、大変。。。
const upperHello1 = toUpperCase2("hello") as string;

interface DownloadData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const downloadedData: DownloadData = {
  id: 1,
};
// ①オプショナルチェーンでエラーを回避
console.log(downloadedData.user!.name);
// ②if文でエラーを回避
if (downloadedData.user) {
  console.log(downloadedData.user.name);
}
//⭐️オプショナルチェーン　③「?」でエラーを回避
console.log(downloadedData.user?.name?.first);

//⭐️NullishCoalescingにてデフォルト値を入れる
//undefainf or nullの場合には、デフォルト値が入るようになる
const userData = downloadedData.user ?? "no-user（デフォルト値）";
const userData2 = downloadedData.user || "no-user（デフォルト値）"; //または三項演算子

//⭐️LookUp型（IndexAccess型）
type id = DownloadData["id"];
type id2 = DownloadData["user"];
type id3 = DownloadData["user"]["name"];
type id4 = DownloadData["id" | "user"];
type StringArray = string[];
type ArrayValue = StringArray[10];
type ArrayValue2 = StringArray[number];
type TupleType = [string, number, boolean];
type TupleValue = TupleType[0];
// type TupleValue2 = TupleType[100];→NG

let target = "hello";
let source: "hello" = "hello";
target = source;
// source = target; →NG

enum Color {
  RED,
  BLUE,
}
enum Status {
  RED,
  BLUE,
}
// let targe2: Color;
let targe2 = Color.RED;
let targe3 = Status.RED;
let source2 = 100;
// enum型の中にnumber型を入れることは例外的に可能・・・enum型は型安全上で問題があるので、慎重に利用する必要がある
targe2 = source2; //OK
source2 = targe2; //OK
// targe2 = targe3;・・・NG（名前で型を区別する）→enumについては名前的片付けと呼ばれている

let target10 = function (a: string, b: string) {};
let source10 = function (a: string) {};
target10 = source10; //OK
// source10 = target10; →NG　・・・型の安全が保障されないため
// →JavaScriptでは、引数が1つの場合にて引数が複数個指定されたとしても2つ目以降は無視されるという仕様がある
// 2 個の引数が必要ですが、0 個指定されました。ts(2554)
target10("hi", "hello");

class AdvancedPerson {
  name: string = "Peter";
  age: number = 35;
}
class AdvancedCar {
  name: string = "Prius";
  age: number = 5;
}
class AdvancedCar2 {
  name: string = "Prius";
  //⭐️privateやprotectedがつくと、堅安全性が保たれなくなり、同様なクラス構成だとしても代入はできなくなる
  //→構造的型付ではなくて、名前的型付となる
  private age: number = 5;
}
let target100 = new AdvancedPerson();
let source100 = new AdvancedCar();
let source200 = new AdvancedCar2();
target100 = source100;
// target100 = source200;→NG（構造的型付ではなくて、名前的型付となる）

//⭐️レストパラメータ
//配列の場合
function advancedFn(...args: number[]) {}
advancedFn(0, 2, 3, 4, 5, 6);
//タプルもOK
//開発をする際に便利になるように配列の要素に名前をつけることができる。ホバーにて・・・function advancedFn2(age: number,
function advancedFn2(...args: [age: number, string?, boolean?, ...number[]]) {} //「？」オプショナルチェーンはお尻からつける
advancedFn2(0, "hi", false);
advancedFn2(0, "hi");
advancedFn2(0);
advancedFn2(0, "hi", false, 1, 2, 3, 4, 12345678, 1, 2);
//advancedFn2(0, "hi", 1, 2, 3, 4, 12345678, 1, 2); //エラー
