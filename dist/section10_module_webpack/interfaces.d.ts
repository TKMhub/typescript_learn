export interface Foodsable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}
export default interface FoodsableDefault {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}
export interface Scoreable {
    readonly totalScore: number;
    render(): void;
}
export interface Foodable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}
