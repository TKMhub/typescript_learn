interface Scoreable {
  readonly totalScore: number;
  render(): void;
}
interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}
interface Foodsable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}

class Score implements Scoreable {
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

class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener("click", this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    this.element.classList.toggle("food--active");
    const score = new Score();
    score.render();
  }
}

class Foods implements Foodsable {
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
      new Food(element);
    });
  }
}

const foods = new Foods();
