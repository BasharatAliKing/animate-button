const mongoose=require("mongoose");
require("../db/conn");
const hotelSchema=mongoose.Schema({
    name:String,
    id:String,
    date:String,
    persons:Number,
    days:String,
    Room:String,
    Amenities:Array,
    Advance:String
});

const Hotel=mongoose.model("Hotel",hotelSchema);
module.exports=Hotel;