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
  //タグ変数を使って判別するのもあり;

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

// <input id="input">にアクセス
//const input: HTMLElement・・・interface
const input0: HTMLElement = document.getElementById("input");

//⭐️型アサーション・・・強制的明示的型宣言
//⭐️型アサーション①<>
//React利用時にはタグを利用すると紛らわしくなる
const input1 = <HTMLInputElement>document.getElementById("input");
//⭐️型アサーション②as・・・基本こちらでOK
const input2 = document.getElementById("input") as HTMLInputElement;
// input0.value = "inital input value";→NG
input1.value = "inital input value";
input2.value = "inital input value";

//カッコを利用するやり方でも代入可能
(<HTMLInputElement>document.getElementById("input")).value = "afaf";
(document.getElementById("input") as HTMLInputElement).value = "afaf";

//⭐️「!」 non-null assertion operator・・・nullの可能性がなくなる
//if文などで利用すると楽
//初期化の際や、if文の中で利用する
const input3 = document.getElementById("input")!;

//⭐️indexシグネチャ
interface Designer {
  name: string;
  //indexシグネチャを使うと、他のものも全て型を揃える必要がある
  [index: string]: string;
}

const designer: Designer = {
  name: "Quill",
  //indexシグネチャにより、なんでも付け加えられるようになる
  role: "afaf",
  aaa: "aaa",
};

//indexシグネチャにより下記はエラーにならない
console.log(designer.bbb);

//⭐️関数のオーバーロード・・・関数定義の上にstringだったらstringを返すと定義することができる
//オーバーロードする場合にはデフォルトの型などその他の型を認識しなくなる
//順番によって優先順位が変わる。上から順番に先に当てはまったものが最優先
//関数のオーバーロードは元の関数がとりえる型しか定義することはできない
//元の関数の型に当てはまれば、処理の内容に関わらず、型を定義することができるため、処理の内容に注意
//オーバーロードの場合、functionにより関数宣言をする必要がある
//もしstringだったらstring
function toUpperCase2(x: string): string;
//もしnumberだったらnumber
function toUpperCase2(x: number): number;
function toUpperCase2(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return x;
}

//これだと、stringとnumberに関わる関数しか利用できない
const upperHello = toUpperCase2("hello");
//型アサーションでstringと明示すればOKではあるが、、、。
//開発者がわかっていれば、最初から型アサーションでOKだが、大変。。。
const upperHello1 = toUpperCase2("hello") as string;

interface DownloadData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const downloadedData: DownloadData = {
  id: 1,
};
// ①オプショナルチェーンでエラーを回避
console.log(downloadedData.user!.name);
// ②if文でエラーを回避
if (downloadedData.user) {
  console.log(downloadedData.user.name);
}
//⭐️オプショナルチェーン　③「?」でエラーを回避
console.log(downloadedData.user?.name?.first);
