const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');
var ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b2d8806e189f92ea78484bf')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    }, (err)=>{
        console.log(err);
    });

    // client.close();
});