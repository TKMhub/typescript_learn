"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score2 = void 0;
class Score2 {
    get totalScore() {
        const foods = new Foods();
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector(".score__number").textContent = String(this.totalScore);
    }
}
exports.Score2 = Score2;
//# sourceMappingURL=score.js.map