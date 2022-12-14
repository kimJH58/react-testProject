const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema({

    title :{
        type: String,
        maxlength:50
    },
    description : {
        type:String
    },
    privacy:{
        type:Number
    },
    filePath:{
        type:String
    },
    category : {
        type:String
    },
    views:{
        type:Number,
        default:0
    }
}, {timestamps:true})

const Video = mongoose.model('Video', videoSchema);

module.exports = { Video }