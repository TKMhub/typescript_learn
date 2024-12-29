type Engineer = {
    name: string;
    role: string;
};
type Blogger = {
    name: string;
    follower: number;
};
type EngineerBlogger = Engineer & Blogger;
declare const quill2: EngineerBlogger;
type tmp = string & number;
type NumberBoolean = number | boolean;
type StringNumber = number | String;
type Mix = NumberBoolean & StringNumber;
declare function toUpperCase(x: string | number): string;
type NomadWorker = Engineer | Blogger;
declare function describeProfile(nomadWorker: NomadWorker): void;
declare class Dog {
    kind: "dog";
    speak(): void;
}
declare class Bird {
    kind: "bird";
    speak(): void;
    fly(): void;
}
type Pet = Dog | Bird;
declare function havePed(pet: Pet): void;
declare const input0: HTMLElement;
declare const input1: HTMLInputElement;
declare const input2: HTMLInputElement;
declare const input3: HTMLElement;
interface Designer {
    name: string;
    [index: string]: string;
}
declare const designer: Designer;
declare function toUpperCase2(x: string): string;
declare function toUpperCase2(x: number): number;
declare const upperHello: string;
declare const upperHello2: typeof toUpperCase2;
interface TmpFunc {
    (x: string): string;
    (x: number): number;
}
interface FuncA {
    (a: number, b: string): number;
    (a: string, b: number): number;
}
interface FuncB {
    (a: string): number;
}
declare let intersectionFunc: FuncA & FuncB;
declare let intersectionFunc2: FuncB & FuncA;
interface FuncC {
    (a: number): number;
}
interface FuncD {
    (a: string): string;
}
declare let unionFunc: FuncC | FuncD;
declare const upperHello1: string;
interface DownloadData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        };
    };
}
declare const downloadedData: DownloadData;
declare const userData: string | {
    name?: {
        first: string;
        last: string;
    };
};
declare const userData2: string | {
    name?: {
        first: string;
        last: string;
    };
};
type id = DownloadData["id"];
type id2 = DownloadData["user"];
type id3 = DownloadData["user"]["name"];
type id4 = DownloadData["id" | "user"];
type StringArray = string[];
type ArrayValue = StringArray[10];
type ArrayValue2 = StringArray[number];
type TupleType = [string, number, boolean];
type TupleValue = TupleType[0];
declare let target: string;
declare let source: "hello";
declare enum Color {
    RED = 0,
    BLUE = 1
}
declare enum Status {
    RED = 0,
    BLUE = 1
}
declare let targe2: Color;
declare let targe3: Status;
declare let source2: number;
declare let target10: (a: string, b: string) => void;
declare let source10: (a: string) => void;
declare class AdvancedPerson {
    name: string;
    age: number;
}
declare class AdvancedCar {
    name: string;
    age: number;
}
declare class AdvancedCar2 {
    name: string;
    private age;
}
declare let target100: AdvancedPerson;
declare let source100: AdvancedCar;
declare let source200: AdvancedCar2;
declare function advancedFn(...args: number[]): void;
declare function advancedFn2(...args: readonly [
    age: number,
    name?: string,
    pets?: boolean,
    ...scores: number[]
]): void;
declare let milk: "milk";
declare let drink: "milk";
declare const array: readonly [10, 20];
declare const peter: {
    readonly name: "Peter";
    readonly age: 38;
};
type PeterType = typeof peter;
