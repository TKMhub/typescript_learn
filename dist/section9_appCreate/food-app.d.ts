declare class Score {
}
declare class Food {
    element: HTMLDivElement;
    constructor(element: HTMLDivElement);
    clickEventHandler(): void;
}
declare class Foods {
    elements: NodeListOf<HTMLDivElement>;
    private _activeElements;
    get activeElements(): HTMLDivElement[];
    constructor();
}
declare const foods: Foods;
