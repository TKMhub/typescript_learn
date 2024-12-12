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
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
// console.log(quill);
const quill = new Person("Quill");
quill.greeting();
const anotherQuill = {
    name: "anotherQuill",
    anotherGreeting: quill.greeting,
};
anotherQuill.anotherGreeting();
//# sourceMappingURL=object.js.map