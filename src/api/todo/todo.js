const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    due_date: { type: String },
    all_day: { type: Boolean, required: true, default: false },
    content: { type: String, required: true },
    
    is_done: { type: Boolean, required: true, default: false },
    is_deleted: { type: Boolean, required: true, default: false },
    
    task_order: { type: Number },
    user_id: { type: String },
   
    category: { type: String },
    priority: { type: Number},
    flag: { type: String},
    assigned_to: { type: String}

})

module.exports = restful.model('Todo', todoSchema)