//⭐️exportをまとめて行う場合
interface Foodsable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}
interface FoodsableDefault {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}
interface Scoreable {
  readonly totalScore: number;
  render(): void;
}
interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}

//まとめてexportする場合
export { Foodsable, FoodsableDefault, Scoreable, Foodable };
// →import {Foodsable, FoodsableDefault, Scoreable, Foodable} from "*/section10_module_webpack/interfaces_export.ts"
