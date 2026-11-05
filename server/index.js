const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');


dotenv.config();





const app=express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to DATABASE");
})
.catch((err)=>{
    console.error("Error contecting to database",err);
})

const PORT=process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`server is running on PORT:${PORT}`);
});