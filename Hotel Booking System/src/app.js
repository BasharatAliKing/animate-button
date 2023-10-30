const express=require("express");
const app=express();
const port=process.env.PORT||8000;
const ejs=require("ejs");
const path=require("path");
require("../src/db/conn");
const Hotel=require("../src/model/model");
const staticPath=path.join(__dirname,"../public");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");
app.use(express.static(staticPath));

app.get("/", (req,res)=>{
    res.render("index");
});
app.post("/", async(req,res)=>{
    try{
        console.log(req.body);
        const HotelData=new Hotel({
            name:req.body.name,
            id:req.body.id,
            date:req.body.date,
            person:req.body.person,
            days:req.body.days,
            Room:req.body.room,
            Amenities:req.body.amenities,
            Advance:req.body.advance
        });
        const saveData=await HotelData.save();
       // console.log(saveData);
       res.status(200).send("your Data is Submitted!!");   
    }catch(err){
        res.status(400).send(err);
    }
})
app.listen(port,"127.0.0.1",()=>{console.log(`Listening from the port no ${port}`)});