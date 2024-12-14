declare const person: {
    name: {
        first: string;
        last: string;
    };
    age: number;
    gender: string;
};
declare class Person {
    name: string;
    age: number;
    constructor(initName: string, initAge: number);
    greeting(this: {
        name: string;
    }): void;
    greeting2: () => void;
    greeting3(this: Person): void;
    incrementAge(): void;
}
declare let person5: Person;
declare const quill: Person;
