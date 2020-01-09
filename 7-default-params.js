const greeter = (name = 'User', age) => {
  console.log(`Hello ${name} you are ${age} years old`);
}

greeter(undefined, 31);
