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
  name: string;

  //初期化・・・オブジェクトが作成される時に一番初めに実行される関数
  constructor(initName: string) {
    this.name = initName;
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
    console.log(`Hello! My name is ${this.name}`);
  }
}

let person5: Person;

// console.log(quill);
const quill = new Person("Quill");
quill.greeting();

const anotherQuill = {
  name: "anotherQuill",
  greeting() {},
  anotherGreeting: quill.greeting,
};

anotherQuill.anotherGreeting();
