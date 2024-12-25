type Engineer = {
  name: string;
  role: string;
  //   afaf: string;
};

type Blogger = {
  name: string;
  follower: number;
};

//⭐️インターセクション型（エンジニアブロガー）
type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger {}

const quill2: EngineerBlogger = {
  name: "Quill",
  role: "front",
  follower: 111,
};

//type tmp = never
type tmp = string & number;

//numberまたはbool / stringまたはnumber　→number 集合の考え方
type NumberBoolean = number | boolean;
type StringNumber = number | String;

type Mix = NumberBoolean & StringNumber;

//⭐️TypeGuard（typeof演算子 in演算子 instanceof演算子）
function toUpperCase(x: string | number) {
  // x.toUpperCase(); →NG
  //⭐️typeof演算子・・・javaScript上の型しか扱うことができない→TSの型Object等を扱うことはできない
  if (typeof x === "string") {
    x.toUpperCase();
  }
  return "";
}

//⭐️in演算子・・・nomadWokerという変数のroleが存在するか
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  // nomadWorker.role→NG
  console.log(nomadWorker.name);
  //in演算子・・・Engineerの中にroleが含まれる
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  //in演算子・・・Blogerの中にfollowerが含まれる
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("bow-wow");
  }
}
class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;
function havePed(pet: Pet) {
  pet.speak();

  //⭐️タグ付きUnion （デザインパターン）
  //タグ変数を使って判別するのもあり
  switch (pet.kind) {
    case "bird":
      pet.fly();
    case "dog":
      pet.speak();
  }

  //in演算子は文字列であるため、間違えてしまう可能性がある
  if ("fly" in pet) {
    pet.fly();
  }
  //⭐️instanceof演算子・・・クラス名にて比較することが可能
  //javaScriptに元々存在する演算子でしかない・・・interface等では代用不可
  if (pet instanceof Dog) {
    pet.speak();
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePed(new Bird());
// havePed({
//   speak() {
//     console.log("hello");
//   },
//   fly() {
//     console.log("pata-pata");
//   },
// });
