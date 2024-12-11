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
}
const quill = new Person("Quill");
console.log(quill);
//# sourceMappingURL=object.js.map