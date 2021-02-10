const orm = require('../config/orm.js');

const burger = {
    selectAll() {
        orm.selectAll()

    },
    insertOne() {
        orm.insertOne()

    },
    updateOne() {
        orm.updateOne()

    }
}

module.exports = burger;