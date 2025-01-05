declare class Score {
    get totalScore(): number;
    render(): void;
}
declare class Food {
    element: HTMLDivElement;
    constructor(element: HTMLDivElement);
    clickEventHandler(): void;
}
declare class Foods {
    elements: NodeListOf<HTMLDivElement>;
    private _activeElements;
    private _activeElementsStore;
    get activeElements(): HTMLDivElement[];
    get activeElementsStore(): number[];
    constructor();
}
declare const foods: Foods;
