type Human10 = {
    readonly name: string;
    age: number;
};
declare const human10: Human10;
declare let developer10: Human10;
interface Human {
    readonly name: string;
    age: number;
    greeting(message: string): void;
}
declare const human: Human;
declare let developer: Human;
declare class Developer implements Human {
    name: string;
    age: number;
    experience: number;
    constructor(name: string, age: number, experience: number);
    greeting(message?: string): void;
}
declare const tmpDeveloper: {
    name: string;
    age: number;
    greeting(message?: string): void;
};
declare const user: Human;
declare const user10: Human;
declare let develop: Developer;
declare let develop2: Human;
interface Nameable {
    name: string;
    nickName?: string;
}
declare const namable: Nameable;
interface Human20 extends Nameable {
    age: number;
    greeting(message: string): void;
}
type Nameable30 = {
    name: string;
};
interface Human40 extends Nameable30 {
    name: string;
    age: number;
    greeting(message: string): void;
}
interface addFunc {
    (num1: number, num2: number): number;
}
interface addFunc2 {
    new (num1: number, num2: number): number;
}
declare let addFunc: addFunc;
