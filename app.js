const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Azure!");
});

app.get("/azure/get", (req, res) => {
    res.send("GET from Azure!");
});

app.post("/azure/post", (req, res) => {
    res.send("POST from Azure!");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port " + (process.env.PORT || 3000));
});