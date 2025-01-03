class Score {
}
class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener("click", this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle("food--active");
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
    constructor() {
        this.elements = document.querySelectorAll(".food");
        this._activeElements = [];
        this.elements.forEach((element) => { });
    }
}
const foods = new Foods();
//# sourceMappingURL=food-app.js.map