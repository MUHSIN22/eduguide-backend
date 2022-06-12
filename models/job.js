const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    hyperLink:{
        type: String,
        required: true
    },
    date:{
        type: String,
    },
    type:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('posts',postSchema)