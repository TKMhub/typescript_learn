interface Scoreable {
    readonly totalScore: number;
    render(): void;
}
interface Foodable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}
interface Foodsable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}
declare class Score implements Scoreable {
    get totalScore(): number;
    render(): void;
}
declare class Food implements Foodable {
    element: HTMLDivElement;
    constructor(element: HTMLDivElement);
    clickEventHandler(): void;
}
declare class Foods implements Foodsable {
    elements: NodeListOf<HTMLDivElement>;
    private _activeElements;
    private _activeElementsStore;
    get activeElements(): HTMLDivElement[];
    get activeElementsScore(): number[];
    constructor();
}
declare const foods: Foods;
