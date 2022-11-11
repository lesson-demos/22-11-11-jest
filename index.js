function capitalize(string) {
  return string.replace(/([a-z]+\W+)|([a-z]+$)/g, (match) => {
    return match[0].toUpperCase() + match.slice(1);
  });
}

function add(x, y) {
  return x + y;
}

function multiply(a, b, addFunc = add) {
  let product = 0;
  for (let i = 0; i < b; i++) {
    product = addFunc(product, a);
  }
  return product;
}

module.exports = {
  capitalize,
  add,
  multiply
}