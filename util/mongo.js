const { MongoClient } = require("mongodb")

require('dotenv').config()
const mongoPath = process.env.MONGOPATH

// Init Mongo
const client = new MongoClient(mongoPath);

const initMongo = async () => {
    try {
        // Connect the client to the server
        await client.connect().then(()=> {
            console.log('Successfully connected to MongoDB')
        })
  
      } finally {
        // Ensures that the client will close when you finish/error
        /*await client.close().then(() => {
            console.log('Closed Connection')
        })*/
      }
}

const createDocument = async (data, collection = 'profile') => {
    const database = client.db().collection(collection);

    const result = await database.insertOne(data)
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
}

module.exports = () => {}

module.exports.initMongo = () => initMongo()

module.exports.shutdownMongo = async () => {
    await client.close().then(() => {
        console.log('Closed Connection')
    })
}

module.exports.createDocument = (data, collection) => createDocument(data, collection)