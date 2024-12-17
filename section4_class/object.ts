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
  //⭐️初期化の処理を省略する方法
  // public name: string;
  // private age2: number;

  //下記の書き方もOK　※privateの後にreadonryを付け加える
  private readonly id: number = 32;

  //⭐️Readonly修飾子
  //⭐️protected修飾子・・・継承先ではアクセス可能であるが、外からのアクセスは不可能となる
  constructor(public readonly name2: string, protected readonly age2: number) {}
  //Readonly修飾子によって、クラス内外にて値の変更ができなくなる
  //不意に書き換えてしまうようなミスを防ぐことができる
  incrementAge() {
    // this.age2 += 1;
  }

  greeting3(this: Person2) {
    console.log(`Hello! My name is ${this.name2}. I am ${this.age2} years old`);
  }
}

let person4 = Person2;
const quill4 = new Person2("Quill", 30);
// 読み取り専用プロパティであるため、'age2' に代入することはできません。ts(2540)
// プロパティ 'age2' はプライベートで、クラス 'Person2' 内でのみアクセスできます。ts(2341)
// quill4.age2 = 50;  →NG

//⭐️継承 extends
class Teacher extends Person2 {
  //⭐️getter
  // 'get' アクセサーは値を返す必要があります。ts(2378)
  get subject(): string {
    if (!this._subject) {
      throw new Error("There is no subject.");
    }
    // return "music";
    return this._subject;
  }

  //⭐️setter
  // 'set' アクセサーにはパラメーターを 1 つだけ指定しなければなりません。ts(1049)
  //(parameter) value: string・・・getterの型を型推測する(名前がちがければ反映しない)
  set subject(value) {
    if (!value) {
      throw new Error("There is no subject.");
    }
    this._subject = value;
  }

  // 派生クラスのコンストラクターには 'super' の呼び出しを含める必要があります。ts(2377)
  constructor(name: string, age: number, private _subject: string) {
    super(name, age); //このsuperはPerson3クラスのコンストラクタ関数のことを指す
  }

  greeting3() {
    console.log(
      `Hello! My name is ${this.name2}. I am ${this.age2} years old. I teach ${this.subject}`
    );
  }
}

const teacher = new Teacher("Quill", 38, "math");
console.log("継承");
teacher.greeting3();

//⭐️getter
// ※ES5以上のみgetterとsetterは存在する
console.log(teacher.subject);

//⭐️setter
teacher.subject = "faf";
