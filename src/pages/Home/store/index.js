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

export default homeStore;
