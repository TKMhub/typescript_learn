//⭐️オブジェクトリテラル
const person = {
  name: {
    first: "AAA",
    last: "BBB",
  },
  age: 38,
  gender: "male",
};

//⭐️Class
//オブジェクトの設計図→クラスから作られたオブジェクトはインスタンスと言われる
//似たようなオブジェクトを複数作成するときに便利
//クラス名は大文字
class Person {
  //nameフィールド
  //   name: string = "Quill";
  public name: string;
  //パブリックはデフォルトでパブリック
  // name: string;
  // age: number;
  //⭐️プライベート修飾子
  private age: number;

  //初期化・・・オブジェクトが作成される時に一番初めに実行される関数
  // constructor(initName: string, initAge: number) {
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  //⭐️thisの型を第一パラメータで指定することができる
  greeting(this: { name: string }) {
    console.log(`Hello! My name is ${this.name}`);
  }

  //⭐️アロー関数は定義時にthisが決まる
  greeting2 = () => {
    console.log(`Hello! My name is ${this.name}`);
  };

  //⭐️Personクラスが生成するインスタンスと同じ型定義を利用することができる
  //クラスはあたいだけではなくてクラスが生成してできるオブジェクトの型にもなりえる
  greeting3(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old`);
  }

  incrementAge() {
    // ⭐️プライベート修飾子歯メソッドにも利用可能
    // private incrementAge() {
    this.age += 1;
  }
}

let person5: Person;

// console.log(quill);
const quill = new Person("Quill", 38);

// const anotherQuill = {
//   name: "anotherQuill",
//   greeting() {},
//   anotherGreeting: quill.greeting,
// };

// anotherQuill.anotherGreeting();

// ⭐️パブリック修飾子
quill.incrementAge();
// quill.age = 43; →これも可能となる
quill.greeting3();

//⭐️プライベート修飾子
quill.incrementAge();
// quill.age = 43; →プライベートの場合には代入不可NG
//console.log(quill.age); →プライベートの場合には呼び出し不可NG
// プロパティ 'age' はプライベートで、クラス 'Person' 内でのみアクセスできます。ts(2341)
quill.greeting3();

//⭐️初期化の処理を省略する方法
class Person2 {
  // public name: string;
  private age2: number;

  //⭐️初期化の処理を省略する方法
  constructor(public name2: string, initAge: number) {
    this.age2 = initAge;
  }

  greeting3(this: Person2) {
    console.log(`Hello! My name is ${this.name2}. I am ${this.age2} years old`);
  }

  incrementAge() {
    this.age2 += 1;
  }
}
