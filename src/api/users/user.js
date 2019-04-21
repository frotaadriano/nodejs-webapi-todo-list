const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
   
    registrationdate: { type: Date, default: Date.now },
    firstname: { type: String , required: true },
    lastname: { type: String },
    email: { type: String , required: true },
    username: { type: String , required: true },
    password: { type: String , required: true },
    accesstoken: { type: String, required: true, default: "asndjkasdjaksdhjkah"  },    
    is_active: { type: Boolean, required: true, default: true },
    is_deleted: { type: Boolean, required: true, default: false },
    avatar:  { type: String }
    
   

})

module.exports = restful.model('User', userSchema)