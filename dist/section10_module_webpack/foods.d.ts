import asdfghDefault from "./interfaces";
import "./food";
export declare class Foods2 implements asdfghDefault {
    elements: NodeListOf<HTMLDivElement>;
    private _activeElements;
    private _activeElementsStore;
    get activeElements(): HTMLDivElement[];
    get activeElementsScore(): number[];
    constructor();
}
