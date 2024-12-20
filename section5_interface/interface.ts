// const human: {
//   name: string;
//   age: number;
// } = {
//   name: "Quill",
//   age: 38,
// };

//⭐️typeエイリアス
type Human10 = {
  name: string;
  age: number;
};

const human10: Human10 = {
  name: "Quill",
  age: 38,
};

let developer10: Human10;

//⭐️interface・・・表面上の、オブジェクトの構造を表したもの
//ほとんどtypeエイリアスと変わらない
//💫interfaceはオブジェクトのみ→絶対にオブジェクトを指し示す
//typeエイリアスはなんでもいける
interface Human {
  name: string;
  age: number;
}

const human: Human = {
  name: "Quill",
  age: 38,
};

let developer: Human;
