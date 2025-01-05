class Score {
    get totalScore() {
        const foods = new Foods();
        return foods.activeElementsStore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector(".score__number").textContent = String(this.totalScore);
    }
}
class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle("food--active");
        const score = new Score();
        console.log("score");
        console.log(score);
        score.render();
    }
}
class Foods {
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach((element) => {
            if (element.classList.contains("food--active")) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    get activeElementsStore() {
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
            new Food(element);
        });
    }
}
const foods = new Foods();
//# sourceMappingURL=food-app.js.map