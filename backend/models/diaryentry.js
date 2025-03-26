const { Schema, model} = require('mongoose');


const diaryEntrySchema = new Schema({
    date:{
        type:Date,
        default:Date.now,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    mood:{
        type:String,
        default:"Neutral"
    },
    salutation:{
        type:String,
        required:true
    },
    signature:{
        type:String,
        default:"Anonymous"
    },
    email:{
        type:String,
        default:"Anonymous"
    },
    title:{
        type:String,
        default:"Untitled"
    },
    isPrivate:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const DiaryEntry = model('diaryentry',diaryEntrySchema);
module.exports = DiaryEntry;