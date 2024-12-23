// const human: {
//   name: string;
//   age: number;
// } = {
//   name: "Quill",
//   age: 38,
// };

//⭐️typeエイリアス
type Human10 = {
  //⭐️readonlyのみ、interfaceに利用することができる
  readonly name: string;
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
  //⭐️readonlyのみ、interfaceに利用することができる
  readonly name: string;
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

//⭐️readonlyのために読み取り専用となっている
//※初期化時のname, コンストラクタのnameについては問題なし
// user.name = "a"; NG

let develop = new Developer("Quill", 38, 3);
let develop2: Human = new Developer("Quill", 38, 3);
// コンストラクタのnameについてhpublicとなっているために、変更可能
// ※implementsされているところのreadonlyは無視することが可能
develop.name = "aaa";
// develop2.name = "aaa"; →NG

interface Nameable {
  name: string;
}

//⭐️interfaceもextends可能・・・複数可能
interface Human20 extends Nameable {
  age: number;
  greeting(message: string): void;
}

//⭐️ typeエイリアスのextendsも可能
type Nameable30 = {
  name: string;
};

//⭐️ typeエイリアスのextendsも可能
interface Human40 extends Nameable30 {
  // extendsにある要素を持っていたら？
  //継承元の型が、継承先の型に代入できる限り、可能である
  name: string;
  age: number;
  greeting(message: string): void;
}
