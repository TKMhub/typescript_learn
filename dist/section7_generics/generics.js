//⭐️ジェネリクス・・・型を引数として利用することができる（型パラメータ
function copy(value) {
    let user;
    return value;
    console.log(copy({ name: "Quill" }));
}
console.log(copy(38));
console.log(copy("hello"));
// Tが共有されているので、オブジェクトも型推論をしてくれる
// function copy<{
//     name: string;
// }>(value: {
//     name: string;
// }): {
//     name: string;
// }
console.log(copy({ name: "Quill" }));
//⭐️関数宣言以外でもジェネリクスを利用
const arrowFunc = (num) => num;
const human200 = {
    greeting(message) {
        console.log(message);
    },
};
function copy2(value) {
    let user;
    return value;
}
console.log(copy2({ name: "Quill" }));
//Tのkey（valueに渡される型（つまりオブジェクト（name, age）））のunion型がUとなる
// U・・・name |age
function copy10(value, key) {
    value[key];
    return value;
}
console.log(copy10({ name: "Quill", age: 38 }, "name"));
console.log(copy10({ name: "Quill", age: 38 }, "age"));
// console.log(copy10({ name: "Quill", age: 38 }, "foo"));→NG
//⭐️クラスにジェネリクスを追加する
class LightDatabese {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabese();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Grape");
stringLightDatabase.add("Banana");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase.get());
//# sourceMappingURL=generics.js.map