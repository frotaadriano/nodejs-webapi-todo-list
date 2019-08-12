const Tags = require('./tags')

Tags.methods(['get', 'post', 'put', 'delete'])
Tags.updateOptions({new: true, runValidators: true})

module.exports = Tags