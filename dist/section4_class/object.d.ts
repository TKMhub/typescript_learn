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
}
declare const quill: Person;
