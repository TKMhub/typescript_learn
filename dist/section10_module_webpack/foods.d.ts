import { Foodsable } from "./interfaces";
export declare class Foods2 implements Foodsable {
    elements: NodeListOf<HTMLDivElement>;
    private _activeElements;
    private _activeElementsStore;
    get activeElements(): HTMLDivElement[];
    get activeElementsScore(): number[];
    constructor();
}
