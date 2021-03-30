// www.geekschool.org/2020/07/31/12776.html
const container = document.getElementsByClassName("container")[0];

function createBrands() {
  return [...Array(81).keys()].map((brand) => {
    const div = document.createElement("div");
    div.innerHTML = brand;
    div.className = "c-random__brand";
    return div;
  });
}

function calculatePlace() {
  brands.forEach((brand) => {
    const { left, top } = brand.getBoundingClientRect();
    brand.dataset.left = left;
    brand.dataset.top = top;
    brand.style.transition = "unset";
  });
  brands.sort((a, b) => (Math.random() > 0.5 ? -1 : 1));

  Promise.resolve().then(() => {
    brands.forEach((brand) => {
      const { left, top } = brand.getBoundingClientRect();
      const { left: oldLeft, top: oldTop } = brand.dataset;
      brand.style.transform = `translate3d(${oldLeft - left}px, ${
        oldTop - top
      }px, 0)`;
    });
  });
}

function patchBrandDom() {
  brands.map(container.appendChild.bind(container));
  requestAnimationFrame(() => {
    brands.forEach((brand) => {
      const { left, top } = brand.getBoundingClientRect();
      brand.style.transform = `translate3d(0, 0, 0)`;
      brand.style.transition = "all 2s";
    });
  });
}

function shuffle() {
  calculatePlace();
  patchBrandDom();
}
const brands = createBrands();

shuffle();

const btn = document.getElementById("btn");
btn.addEventListener("click", shuffle);

const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6);
      }, 0);
      resolve(1);
    });
    resolve(2);
    p.then((arg) => {
      console.log("hello 1")
      console.log(arg);
    });
  });

first().then((arg) => {
  console.log("hello 2");
  console.log(arg);
});
console.log(4);

// 3 7 4 1 2 5 


new Promise((resolve) => {
  resolve(1);

  Promise.resolve().then(() => {
    // t2
    console.log(2);
  });
  console.log(4);
}).then((t) => {
  // t1
  console.log(t);
});
console.log(3);

// 4 3 2 1 

// -----------------------

async function async1() {
  console.log("async1 start"); // 2
  await async2();
  console.log("async1 end"); // 7
}

async function async2() {
  console.log("async2"); // 3
}

console.log("script start"); // 1

setTimeout(function () {
  console.log("setTimeout"); // 8
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1"); // 4
  resolve();
}).then(function () {
  console.log("promise2"); // 6
});
console.log("script end"); // 5

// -----------------------

async function async1(){
    console.log('async1 start') 
    await async2()
    console.log('async1 end')
}
function async2(){ // 去掉了 async 关键字
    console.log('async2');
}
console.log('script start') // 1
setTimeout(function(){
    console.log('setTimeout')
},0)  
async1();
new Promise(function(resolve){
    console.log('promise1')
    resolve();
}).then(function(){
    console.log('promise2')
})
console.log('script end')