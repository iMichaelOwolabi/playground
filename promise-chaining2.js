require('../task-manager/src/index');
const Task = require('../task-manager/src/models/task');

// Task.findByIdAndDelete('5dfbea03eb3c0b7feaacc7ab').then((task) => {
//   console.log(task);
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)
// });

const deleteAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteAndCount('5dfbf6920b1a0680529d121e').then((count) => {
  console.log(count)
}).catch((error) => {
  console.log(error)
})
