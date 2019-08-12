const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')

    const tagsService = require('../api/tags/tagsService')
    tagsService.register(router, '/tags')

    const userService = require('../api/users/userService')
    userService.register(router, '/users')
}