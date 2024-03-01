import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
},
{ timestamps: true }
)


export default mongoose.model("User", userSchema);