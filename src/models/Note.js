const mongoose =require("mongoose");

const NoteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
   
})



module.exports=mongoose.models.Note || mongoose.model("Note",NoteSchema);