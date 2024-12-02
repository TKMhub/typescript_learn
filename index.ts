// type annotation　型注釈
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

//型推論　　　※毎回型推論でOK
let back2 = `hello`;
// back2 = 2 →×

//オブジェクトに型（型注釈）
const person: {
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

//配列
const fluits: string[] = ["Apple", "Banana", "grape"];
const fluits2: any[] = ["Apple", "Banana", "grape"];
const fluits3: (string | number)[] = ["Apple", "Banana", "grape", 1];
// const fuluits: string[] = ["Apple", "Banana", "grape", 1]; →×
//fluits.forEach()

//タプル   配列の強化版で、オブジェクトには劣るイメージ
const book: [string, number, boolean] = ["Business", 1500, false];
// ※タプルでは型推論してくれない→必ず型推論
book.push(21); //これはOK・・・TypeScriptでhじゃ初期値に厳しい

// Enum型（列挙型）
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
