"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food2 = void 0;
const score_1 = require("./score");
class Food2 {
    constructor(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle("food--active");
        const score = new score_1.Score2();
        score.render();
    }
}
exports.Food2 = Food2;
//# sourceMappingURL=food.js.map