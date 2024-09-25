import express from "express";
import {connectDb} from "../src/config/dbconnection";
 require("dotenv").config();
 require ('cors');
import errorHandler from "../src/middleware/errorHandler";
import roomTypesRouter from './routes/roomType.route'

 connectDb();


const port = process.env.PORT || 5001;
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use("/api/users", require("../src/routes/user.route"));
app.use("/api/v1/rooms", require("../src/routes/hotelRoutes"));
app.use("/api/v1/room-types", roomTypesRouter)
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`Server runing on port ${port}`)
})



