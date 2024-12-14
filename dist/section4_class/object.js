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
    //初期化・・・オブジェクトが作成される時に一番初めに実行される関数
    constructor(initName, initAge) {
        //⭐️アロー関数は定義時にthisが決まる
        this.greeting2 = () => {
            console.log(`Hello! My name is ${this.name}`);
        };
        this.name = initName;
        this.age = initAge;
    }
    //⭐️thisの型を第一パラメータで指定することができる
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
    //⭐️Personクラスが生成するインスタンスと同じ型定義を利用することができる
    //クラスはあたいだけではなくてクラスが生成してできるオブジェクトの型にもなりえる
    greeting3() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old`);
    }
    incrementAge() {
        this.age += 1;
    }
}
let person5;
// console.log(quill);
const quill = new Person("Quill", 38);
quill.incrementAge();
quill.greeting3();
// const anotherQuill = {
//   name: "anotherQuill",
//   greeting() {},
//   anotherGreeting: quill.greeting,
// };
// anotherQuill.anotherGreeting();
// ⭐️パブリック修飾子、プライベート修飾子
//# sourceMappingURL=object.js.map