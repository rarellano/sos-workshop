var express = require("express");

var port = (process.env.PORT);

var app = express();

app.use("/", express.static("/home/ubuntu/workspace/sos-workshop/rarellano/lab05/public"))



app.get("/time", (req, res) => {
    res.send(new Date());
})

app.listen(port, () => {
    console.log("Server ready on port : " + port + "!");
}).on("error", (e) => {
    console.log("Server NOT READY" + e);
});

console.log("Server settings up... ");
