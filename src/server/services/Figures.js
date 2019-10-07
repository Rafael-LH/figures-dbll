const MongoLib = require('../lib/mong')

class Figures extends MongoLib {
    constructor() {
        super()
        this.collection = 'products'
    }

    async getFigures() {
        try {
            const figures = await super.getAll(this.collection)
            return figures
        } catch (error) {
            Promise.reject(error)
        }
    }
}

module.exports = Figures