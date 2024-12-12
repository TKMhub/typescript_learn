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
    constructor(initName: string);
    greeting(this: {
        name: string;
    }): void;
}
declare const quill: Person;
declare const anotherQuill: {
    name: string;
    anotherGreeting: (this: {
        name: string;
    }) => void;
};
