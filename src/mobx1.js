import {makeObservable, observable, action, computed, autorun} from 'mobx';

const store = makeObservable({
  count: 1,
  get double() {
    return this.count * 2;
  },
  increment() {
    this.count+=1;
  },
  decrement() {
    this.count-=1;
  }
}, {
  count: observable,
  double: computed,
  increment: action,
  decrement: action
});

class MobxDemo {
  constructor() {
    this.increaseBtn = document.querySelector("#mobxBtnIncrease");
    this.decreaseBtn = document.querySelector("#mobxBtnDecrease");
    this.container = document.querySelector(".container");
  }

  appendCountWrap() {
    this.container.innerHTML = `
      count: ${store.count} <br />
      double count: ${store.double}
    `;
  }

  init() {
    this.appendCountWrap();
    this.increaseBtn.addEventListener("click", () => {
      store.increment();
    });
    this.decreaseBtn.addEventListener("click", () => {
      store.decrement();
    });

    autorun(() => {
      this.appendCountWrap();
    })
  }
}

const mobxDemo = new MobxDemo();
mobxDemo.init();