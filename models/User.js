const mongoose=require('mongoose');
const { Schema }=mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
// model is wrapper used to make connection with mongoDB 
module.exports=mongoose.model('user',UserSchema);
