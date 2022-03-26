const { faker } = require('@faker-js/faker');
const hashing = require('@util/hashing')

const createUser = () => {

    const fullName_first = faker.name.firstName()
    const fullName_last = faker.name.lastName()
    const name = `${fullName_first} ${fullName_last}`
    const email = `${fullName_first.toLowerCase()}_${fullName_last.toLowerCase()}@student.utem.edu.my`
    const unhashedPass = faker.internet.password() // Unhashed
    const phone = faker.phone.phoneNumber('+601########')
    const uuid = faker.datatype.uuid()

    const user = {
        uuid,
        name,
        email,
        password: hashing(unhashedPass),
        phone
    }

    return user
}

module.exports = () => {}
module.exports.createUser = () => createUser()