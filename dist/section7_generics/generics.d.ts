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
interface TmpDatabase<T> {
    id: number;
    data: T[];
}
type TmpDatabase10<T> = {
    id: number;
    data: T[];
};
declare const tmpDatabase: TmpDatabase<number>;
interface Todo {
    title: string;
    text: string;
}
type Todoable = Partial<Todo>;
type Todoable2 = Readonly<Todo>;
declare const fetchData: Promise<string>;
declare const vegetables: Array<string>;
interface ResponseData<T extends {
    message: string;
} = any> {
    data: T;
    status: number;
}
declare let tmp100: Response;
interface Vegetables {
    tomato: string;
    pumpkin: string;
}
declare let tmp3: keyof Vegetables;
type MappedTypes10 = {
    [P in keyof Vegetables]: P;
};
type MappedTypes = {
    [P in "tomato" | "pumpkin"]: P;
};
type MappedTypes2 = {
    [P in "tomato" | "pumpkin"]: string;
};
type MappedTypes3 = {
    readonly [P in "tomato" | "pumpkin"]?: string;
};
type MappedTypes4 = {
    -readonly [P in "tomato" | "pumpkin"]-?: string;
};
type ConditionalTypes = "tomato" extends string ? number : boolean;
type ConditionalTypes2 = string extends "tomato" ? number : boolean;
type ConditionalTypesInfer = {
    tomato: "tomato";
} extends {
    tomato: infer R;
} ? R : boolean;
type ConditionalTypesInfer2 = {
    tomato: string;
} extends {
    tomato: infer R;
} ? R : boolean;
type DistributiveConditionalTypes = "tomato" | "pumpkin" extends "tomato" ? number : boolean;
type DistributiveConditionalTypes2<T> = T extends "tomato" ? number : boolean;
declare let tmp4: DistributiveConditionalTypes2<"tomato" | "pumpkin">;
declare let tmp5: NonNullable<string | null>;
declare let tmp6: ReturnType<() => void>;
type FirstName = "John" | "taku" | "ike";
type LastName = "Lennon" | "name1";
type UserName = `${FirstName}-${LastName}`;
