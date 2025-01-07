declare class User {
    static name2: string;
    name: string;
    constructor();
}
declare class User2 {
    private _age;
    static name2: string;
    name: string;
    constructor(_age: number);
    get age(): number;
    set age(value: number);
    greeting(message: string): void;
}
declare const user1: User;
