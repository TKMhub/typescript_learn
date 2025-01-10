declare function Logging(message: string): (constructor: Function) => void;
declare function Component(template: string, selector: string): <T extends {
    new (...args: any): {
        name: string;
    };
}>(constructor: T) => {
    new (...args: any): {
        name: string;
    };
} & T;
declare function PropertyLogging(target: any, propertyKey: string): void;
declare function enumerable(isEnumerable: boolean): (target: any, propertyKey: string, descriptor: PropertyDecorator) => {
    enumerable: boolean;
};
declare function AccessorLogging(target: any, propertyKey: string): void;
declare function ParameterLogging(target: any, propertyKey: string): void;
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
