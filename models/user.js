import mongoose from "mongoose";

const usqerSchema = new mongoose.Schema({
_id:{ type: String, required:true},
name:{ type: String, required:true},
email:{ type: String, required:true}, unique:true},
imageUri:{type: String, required:true}
cartItems:{type: object , default:{} } 
}, { minimize: false })

const user = mongoose.models.user || mongoose.model ("User", userSchema)

export default user