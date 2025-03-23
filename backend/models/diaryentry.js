const { Schema, model} = require('mongoose');


const diaryEntrySchema = new Schema({
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    entry:{
        type:String,
        required:true
    },
    mood:{
        type:String,
        default:"Neutral"
        // required:true
    },
    salutation:{
        type:String,
        required:true
    },
    signature:{
        type:String,
        default:"Anonymous"
        // required:true
    },
    email:{
        type:String,
        default:"Anonymous"
        // required:true
    },
    title:{
        type:String,
        default:"Untitled"
        // required:true
    },
    isPrivate:{
        type:Boolean,
        default:false
    }
},{timestamps:true});


const DiaryEntry = model('diaryentry',diaryEntrySchema);
module.exports = DiaryEntry;