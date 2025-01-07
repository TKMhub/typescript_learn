import { Foodable } from "./interfaces";
import { Score2 } from "./score";
export class Food2 implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    this.element.classList.toggle("food--active");
    const score = new Score2();
    score.render();
  }
}
