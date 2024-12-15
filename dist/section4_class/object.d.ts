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
    private age;
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
declare class Person2 {
    readonly name2: string;
    private readonly age2;
    private readonly id;
    constructor(name2: string, age2: number);
    incrementAge(): void;
    greeting3(this: Person2): void;
}
declare let person4: typeof Person2;
declare const quill4: Person2;
declare class Teacher extends Person2 {
}
declare const teacher: Teacher;
