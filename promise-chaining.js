require('../task-manager/src/index');
const User = require('../task-manager/src/models/user');

// User.findByIdAndUpdate('5dfbf63583969c804e36375c', { age: 1 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1 });
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error)
// })

const findAndUpdateAge = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

findAndUpdateAge('5dfbf63583969c804e36375c', 2).then((count) => {
  console.log(count);
}).catch(error => {
  console.log(error)
})