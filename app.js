const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Azure!");
});

app.get("/azure", (req, res) => {
    res.send("GET from Azure!");
});

app.post("/azure", (req, res) => {
    res.send("POST from Azure!");
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running on port " + port);
});