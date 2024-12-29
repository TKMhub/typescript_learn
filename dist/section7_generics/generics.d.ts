declare function copy<T>(value: T): T;
declare const arrowFunc: <T>(num: number) => number;
declare const human200: {
    greeting<T>(message: T): void;
};
declare function copy2<T extends {
    name: string;
}>(value: T): T;
type K = keyof {
    name: string;
    age: number;
};
declare function copy10<T extends {
    name: string;
}, U extends keyof T>(value: T, key: U): T;
declare class LightDatabese<T extends string | number | boolean> {
    private data;
    add(item: T): void;
    remove(item: T): void;
    get(): T[];
}
declare const stringLightDatabase: LightDatabese<string>;
