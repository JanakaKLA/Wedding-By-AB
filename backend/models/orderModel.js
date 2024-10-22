import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Wedding Processing"},
    date:{type:Date,default:Date.now}
})

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema);
export default orderModel;


