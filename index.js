// Import npm packages and config
var argv = require('minimist')(process.argv.slice(2));

require('module-alias/register')

// Connect Mongo
const mongo = require('@util/mongo')
const fakerJS = require('@util/faker')

const starto = async () => {
    const { mode, count = 1, _ } = argv
    if (!mode) {
        try {
            await mongo.initMongo()
        } catch {
            console.log('Connecting Error')
        } finally {
            await mongo.shutdownMongo()
        }
    }
    else if (mode.toLowerCase() == 'create') {
        try {
        await mongo.initMongo()
        for (let i = 0; i < count; i++) {
            await mongo.createDocument(fakerJS.createUser())
        }} catch {
            console.log('Error Executing')
        } finally {
            await mongo.shutdownMongo()
        }
    }
}

starto()

