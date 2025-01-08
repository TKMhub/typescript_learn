//⭐️exportには2種類の書き方がある
//①名前付きexport（通常のexport）
export interface Foodsable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}
//②デフォルトexport
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
