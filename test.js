const MongoClient = require('mongodb').MongoClient;
const readline = require('readline')
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('What is your name? ', (name) => {
// to do - connect to mongo, get name, save name, exit
MongoClient.connect(url, function(err, client) {
    //assert.equal(null, err);
    console.log("Connected successfully to server");
    console.log(`Thank you for your valuable feedback: ${name}`)
    const db = client.db(dbName);
    const collection = db.collection('names');
    collection.insertOne ({name: name}, function(err, result){
        rl.close()    
        client.close();
    })
   
})
})