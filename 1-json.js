const fs = require('fs');

// const book = {
//   author: 'Malcomlm Gladwell',
//   title: 'Outlier'
// };

// const jsonBook = JSON.stringify(book);

// fs.writeFileSync('1-json.json', jsonBook);

// const dataBuffer = fs.readFileSync('1-json.json');
// const jsonData = dataBuffer.toString();
// const data = JSON.parse(jsonData);
// console.log(data.title);

const inputData = fs.readFileSync('1-json.json');
const jsonData = inputData.toString();
const parsedInput = JSON.parse(jsonData);
parsedInput.name = 'Michael';
parsedInput.age = 31;
console.log(parsedInput);
const result = JSON.stringify(parsedInput)
console.log(result);

fs.writeFileSync('1-json.json', result);