//⭐️ importは合計5つ書き方がある
//①名前付きインポート
import { Foodsable } from "./interfaces";
//②名前を変えることができる
import { Foodsable as FoodLostable } from "./interfaces";
//③*で全部を表現
import * as interfaces from "./interfaces";
//④デフォルトexport
import asdfghDefault from "./interfaces";
import { Food2 } from "./food";

// export class Foods2 implements Foodsable {
// export class Foods2 implements FoodLostable {
// export class Foods2 implements interfaces.Foodsable {
export class Foods2 implements asdfghDefault {
  elements = document.querySelectorAll<HTMLDivElement>(".food");
  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsStore: number[] = [];
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach((element) => {
      if (element.classList.contains("food--active")) {
        this._activeElements.push(element);
      }
    });
    return this._activeElements;
  }
  get activeElementsScore() {
    this._activeElementsStore = [];
    this.activeElements.forEach((element) => {
      const foodScore = element.querySelector(".food_score");
      if (foodScore) {
        this._activeElementsStore.push(Number(foodScore.textContent));
      }
    });
    return this._activeElementsStore;
  }
  constructor() {
    this.elements.forEach((element) => {
      new Food2(element);
    });
  }
}
