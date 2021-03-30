const aboutStore = {
  age: 1,
  get introduce() {
    return `==> ${this.age} old`;
  },
  increaseAge() {
    this.age += 1;
  },
  decreaseAge() {
    this.age -= 1;
  },
};

const homeStore = {
  count: 1,
  get double() {
    return `==> ${this.count * 2}`;
  },
  increase() {
    this.count += 1;
  },
  decrease() {
    this.count -= 1;
  },
};

export default aboutStore;
