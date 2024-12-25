// interface EngineerBlogger extends Engineer, Blogger {}
const quill2 = {
    name: "Quill",
    role: "front",
    follower: 111,
};
//⭐️TypeGuard（typeof演算子 in演算子 instanceof演算子）
function toUpperCase(x) {
    // x.toUpperCase(); →NG
    //⭐️typeof演算子・・・javaScript上の型しか扱うことができない→TSの型Object等を扱うことはできない
    if (typeof x === "string") {
        x.toUpperCase();
    }
    return "";
}
function describeProfile(nomadWorker) {
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
    speak() {
        console.log("bow-wow");
    }
}
class Bird {
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}
function havePed(pet) {
    pet.speak();
    //in演算子は文字列であるため、間違えてしまう可能性がある
    if ("fly" in pet) {
        pet.fly();
    }
    if (pet instanceof Dog) {
        pet.speak();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePed(new Dog());
havePed({
    speak() {
        console.log("hello");
    },
    fly() {
        console.log("pata-pata");
    },
});
//# sourceMappingURL=advanced.js.map