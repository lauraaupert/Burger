const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));

    },
    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res))

    },
    updateOne() {
        orm.updateOne()

    }
}

module.exports = burger;