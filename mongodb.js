const { MongoClient, ObjectID } = require('mongodb');

const id = new ObjectID;
console.log(id)
console.log(id.id.length)

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(databaseName);
  
  // db.collection('users').findOne({ _id: new ObjectID("5dfb1c42b41148751decae6f") }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch user');
  //   }
  //   console.log(user)
  // })
  // db.collection('users').find({ name: 'Michael' }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('users').find({ name: 'Michael' }).count((error, users) => {
  //   console.log(users)
  // })

  // db.collection('tasks').findOne({ _id: new ObjectID("5dfb1fb13f10797543c1b239") }, (error, task) => {
  //   if (error) {
  //     return console.log('Unable to fetch task')
  //   }
  //   console.log(task);
  // })

  // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
  //   if (error) {
  //     return console.log('Unable to fetch tasks')
  //   }
  //   console.log(tasks);
  // })


  // UPDATE
  // const updateUser = db.collection('users').updateOne({
  //   _id: new ObjectID("5dfb1b25b007e675135c9b7a")
  //   },
  //   {
  //     $set: {
  //       name: 'Andrew'
  //     }
  //   }
  // )

  // updateUser.then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then(result => {
  //   console.log(result.modifiedCount)
  // }).catch(error => {
  //   console.log(error)
  // })


  // DELETE

  db.collection('users').deleteMany({
    age: 31
  }).then(result => {
    console.log(result.deletedCount);
  }).catch(error => {
    console.log(error)
  })
 
  db.collection('tasks').deleteOne({
    _id: new ObjectID("5dfb1fb13f10797543c1b238")
  }).then(result => {
    console.log('DELETE ONE', result.deletedCount)
  }).catch(error => {
    console.log(error)
  })
})