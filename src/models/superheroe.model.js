const mongoose = require('mongoose')
const super_schema = mongoose.Schema({
    real_name: {
        type: String,
        required: true
    },
    super_name: {
        type: String,
        required: true
    },
    power: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Superheroe', super_schema)