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
  //⭐️オブジェクトの中の関数の型注釈①
  //   greeting: (message: string) => void;
  //⭐️オブジェクトの中の関数の型注釈②　※型推論はこちら（ES6）
  greeting(message: string): void;
}

const human: Human = {
  name: "Quill",
  age: 38,
  greeting(message: string) {
    console.log(message);
  },
};

let developer: Human;

//⭐️implementsを使用して、クラスに対してinterfaceのい条件を適応させる方法
//extendsしていても、implementsを実装することは可能
//staticについては型定義できないので注意
// クラス 'Developer' はインターフェイス 'Human' を正しく実装していません。
class Developer implements Human {
  // publicとreadonlyのみOK   ※private, protectedはダメ！
  //型を満たしていればOKなので、変数名が異なってもOK
  constructor(
    public name: string,
    public age: number,
    public experience: number //これはinterfaceにはない
  ) {}
  greeting(message: string): void {
    console.log(message);
  }
}

const tmpDeveloper = {
  name: "Quill",
  age: 38,
  greeting(message: string) {
    console.log(message);
  },
};
//⭐️TypeScriptの構造的部分型・・・引数側の整合性があっていればOK
//下記は同義である
//構造的部分型・・・制限が緩い型に対しては制限が厳しい型を入れることができる
const user: Human = new Developer("Quill", 38, 3);
const user10: Human = tmpDeveloper;
