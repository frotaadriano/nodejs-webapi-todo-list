const port = process.env.PORT || 3000

// app.listen(process.env.PORT || 3000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
//   });
  

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log('================================')
    console.log(`BACKEND is running on port ${port}.`)
    console.log('================================')
})

module.exports = server