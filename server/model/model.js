const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    department:{
        type: String,
        required: true
    },
    service:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now,
        required:true
    },
    details:{
        type: String
    },
    status: String,
    remark: String,
rdate: {
    type: Date,
    default: null
},
issuetype: String
})

const userDb = mongoose.model('Test3', schema);

module.exports = userDb;