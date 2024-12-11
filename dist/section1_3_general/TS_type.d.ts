declare let hasValue: boolean;
declare let count: number;
declare let float: number;
declare let negative: number;
declare let double: string;
declare let single: string;
declare let back: string;
declare let back2: string;
declare const person100: {
    name: string;
    age: number;
};
declare const person2: object;
declare const person3: {
    name: {
        firstName: string;
        lastName: string;
    };
    age: number;
};
declare const fluits: string[];
declare const fluits2: any[];
declare const fluits3: (string | number)[];
declare const book: [string, number, boolean];
declare enum CoffeSize {
    SHORT = "SHORT",
    TALL = "TALL"
}
declare const coffe: {
    hot: boolean;
    size: CoffeSize;
};
declare enum CoffeSize2 {
    SHORT = 0,
    TALL = 1
}
declare enum CoffeSize3 {
    SHORT = 2,
    TALL = 3
}
declare const coffe2: {
    hot: boolean;
    size: CoffeSize2;
};
declare let anything: any;
declare let banana: string;
declare let unionType: number | string;
declare let unionTypes: (number | string)[];
declare const apple: "apple";
declare const banana2 = "banana";
declare let clothSaze: "small" | "medium" | "large";
declare const cloth: {
    color: string;
    size: "small";
};
declare const cloth2: {
    color: "white";
    size: "small" | "medium" | "large";
};
type ClothSize = "S" | "M" | "L";
declare let ClothSize: ClothSize;
declare const cloth3: {
    color: string;
    size: ClothSize;
};
declare function add(num1: number, num2: number): number;
declare function sayHello(): void;
declare function sayHello2(): undefined;
declare function sayHello3(): undefined;
declare function sayHello4(): void;
declare function sayHello5(): void;
declare let tmp: undefined;
declare function error(message: string): never;
declare const error2: (message: string) => never;
