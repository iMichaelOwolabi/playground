const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 207,
  salesPrice: undefined,
  rating: 4.2,
}

// Destructuring
const { label, price } = product;
console.log(label, price);

// // Renaming object property while destructuring
const { label: productLabel, price } = product;
console.log(label, productLabel);

// Destructuring straight from function argument

const transaction = (type, {label, rating = 5.0} = {}) => {
  console.log(label, rating)
}
transaction('order', product);

// Adding a default value on an undefined property of an object while destructuring
const { label,  type='stationery'} = product;
console.log(label, type);
