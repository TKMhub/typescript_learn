//⭐️ジェネリクス・・・型を引数として利用することができる（型パラメータ
function copy<T>(value: T): T {
  let user: Teacher;
  return value;
  console.log(copy({ name: "Quill" }));
}
console.log(copy<number>(38));
console.log(copy<string>("hello"));
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
const arrowFunc = <T>(num: number): number => num;
const human200 = {
  greeting<T>(message: T): void {
    console.log(message);
  },
};

function copy2<T extends { name: string }>(value: T): T {
  let user: Teacher;
  return value;
}
console.log(copy2({ name: "Quill" }));
// console.log(copy2({ last: "Quill" }));→NG

//⭐️keyof演算子
//オブジェクトのキーのユニオン型を作成する方法
//type K = "name" | "age"
type K = keyof { name: string; age: number };

//Tのkey（valueに渡される型（つまりオブジェクト（name, age）））のunion型がUとなる
// U・・・name |age
function copy10<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  value[key];
  return value;
}
console.log(copy10({ name: "Quill", age: 38 }, "name"));
console.log(copy10({ name: "Quill", age: 38 }, "age"));
// console.log(copy10({ name: "Quill", age: 38 }, "foo"));→NG
