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
declare abstract class Person2 {
    readonly name2: string;
    protected readonly age2: number;
    private readonly id;
    static species: string;
    static isAdult(age: number): boolean;
    constructor(name2: string, age2: number);
    incrementAge(): void;
    greeting3(this: Person2): void;
    abstract explainJob(): void;
}
declare let person4: typeof Person2;
declare class Teacher extends Person2 {
    private _subject;
    private static instance;
    explainJob(): void;
    get subject(): string;
    set subject(value: string);
    private constructor();
    greeting3(): void;
    static getInstance(): Teacher;
}
declare const teacher: Teacher;
declare const teacher2: Teacher;
