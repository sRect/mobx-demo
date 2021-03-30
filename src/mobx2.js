import { makeAutoObservable, autorun, runInAction, reaction, when } from "mobx";

const store = makeAutoObservable({
  count: 1,
  get double() {
    return this.count * 2;
  },
  init() {
    this.count = 1;
  },
  increment() {
    this.count += 1;
  },
  decrement() {
    this.count -= 1;
  },
  // 在 MobX 中，不管是同步还是异步操作，都可以放到 action 中，
  // 只是异步操作在修改属性时，需要将赋值操作放到 runInAction 中。
  async asyncDecreament() {
    // 模拟获取远程的数据
    const count = await new Promise((resolve) => {
      setTimeout(() => resolve(1), 500);
    });
    // 获取数据后，将赋值操作放到 runInAction 中
    runInAction(() => {
      this.count -= count;
    });
  },
});

class MobxDemo {
  constructor() {
    this.increaseBtn = document.querySelector("#mobxBtnIncrease");
    this.decreaseBtn = document.querySelector("#mobxBtnDecrease");
    this.asyncDecreaseBtn = document.querySelector("#mobxBtnAsyncDecrease");
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

    this.asyncDecreaseBtn.addEventListener("click", () => {
      store.asyncDecreament();
    });

    autorun(() => {
      this.appendCountWrap();
    });

    // 类似与 Vue 中的 watch
    reaction(
      () => store.count,
      (currentVal, oldVal) => {
        console.log(`diff: current: ${currentVal}, old: ${oldVal}`);
      }
    );
    

    when(() => store.count < 0, () => {
      alert('count小于0, 即将被重置');
      store.init();
    });
  }
}

const mobxDemo = new MobxDemo();
mobxDemo.init();
