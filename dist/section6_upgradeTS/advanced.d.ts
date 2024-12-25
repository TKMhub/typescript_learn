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
    speak(): void;
}
declare class Bird {
    speak(): void;
    fly(): void;
}
type Pet = Dog | Bird;
declare function havePed(pet: Pet): void;
