const express = require("express");
const connectdb = require("../src/config/dbconnection");
 require("dotenv").config();
 require ('cors');
const errorHandler = require("../src/middleware/errorHandler");



const port = process.env.PORT || 5001;
const app = express();

connectdb();
app.use(express.json());
app.use("/api/users", require("../src/routes/user.route"));
app.use("/api/v1/rooms", require("../src/routes/hotelRoutes"));
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`Server runing on port ${port}`)
})



