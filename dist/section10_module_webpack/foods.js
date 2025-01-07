"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foods2 = void 0;
const food_1 = require("./food");
class Foods2 {
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
        this.elements = document.querySelectorAll(".food");
        this._activeElements = [];
        this._activeElementsStore = [];
        this.elements.forEach((element) => {
            new food_1.Food2(element);
        });
    }
}
exports.Foods2 = Foods2;
//# sourceMappingURL=foods.js.map