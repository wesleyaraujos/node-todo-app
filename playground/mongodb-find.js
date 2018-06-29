// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // Retorna todos
    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch data');
    // });

    // Retorna apenas tarefas não finalizadas
    // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch data');
    // });

    //Contar quantas tarefas já foram completadas
    // db.collection('Todos').find({completed: true}).count().then((count)=>{
    //     console.log('Completed Todos count:'+count);
    // }, (err)=>{
    //     console.log('Unable to fetch data');
    // });

    db.collection('Users').find({name: 'Wesley Araujo'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log('Unable to fetch the data');
    });

    db.collection('Users').find().count().then((count)=>{
        console.log('Count: '+ count);
    }, (err)=>{
        console.log('Goddammit');
    });

    // client.close();
} );