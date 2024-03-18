const express = require("express");



const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use("/api/v1/rooms", require("./routes/hotelRoutes"));
// app.get("app/v1/rooms", (req, res) => {
//     res.json("hello")
// })

app.listen(port, () =>{
    console.log(`Server runing on port ${port}`)
})



