const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/afstodo'

module.exports = mongoose.connect(url,{ useNewUrlParser: true })

//mongoose.Error.messages.general.required = "xpto 1"
