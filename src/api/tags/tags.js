const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({ 
    name: { type: String }, 
    color: { type: String}

})

module.exports = restful.model('Tags', todoSchema)