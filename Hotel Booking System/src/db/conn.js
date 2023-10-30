const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/HotelData",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
}).then(()=>{console.log("Connetion Successful!!")})
  .catch((err)=>{console.log(err)});