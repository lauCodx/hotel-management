const express = require("express");
const connectdb = require("./config/dbconnection");
const dotenv = require("dotenv").config();



const port = process.env.PORT || 5001;
const app = express();

connectdb();
app.use(express.json());
app.use("/api/v1/rooms", require("./routes/hotelRoutes"));

app.listen(port, () =>{
    console.log(`Server runing on port ${port}`)
})



