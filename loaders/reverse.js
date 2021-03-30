function handleReverse(src) {
  src = src.split("").reverse().join("");

  return src;
}

module.exports = handleReverse;