import {observable, observe} from '@nx-js/observer-util';
// import './flip';
// import './mobx1';
import "./mobx2";
import './react-mobx-lite';

const counter = observable({num: 0}); // 已知属性
const profile = observable(); // 动态属性
const arr = observable([]); // 数组
const countLogger = observe(() => console.log(`num: ${counter.num}`));
observe(() => console.log(`name: ${profile.name}`))
observe(() => console.log(`arr: ${arr}`));

class Foo {
  constructor() {
    this.btn = document.getElementById("btn");
  }

  bindEvents = () => {
    console.log("click click!!!");
    counter.num++;
    profile.name = "haha";
    arr.push(1);
  }
}

const foo = new Foo();
foo.btn.addEventListener("click", foo.bindEvents);
console.log(`window.VERSION==>${VERSION}`);
console.log(_);

// 用于热更新
if (module.hot) {
  module.hot.accept();
}