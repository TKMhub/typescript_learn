//⭐️type only import・・・型の情報のみでimportする場合
import type { Scoreable } from "./interfaces";
// import type { Foods } from "./foods.js";

export class Score2 implements Scoreable {
  get totalScore() {
    const foods = new Foods();
    return foods.activeElementsScore.reduce((total, score) => total + score, 0);
  }

  render() {
    document.querySelector(".score__number")!.textContent = String(
      this.totalScore
    );
  }
}
