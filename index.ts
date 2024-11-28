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
