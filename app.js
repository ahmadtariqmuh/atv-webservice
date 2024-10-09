const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World");
});

app.listen(process.env.PORT || 80, () => {
    console.log("Server is running on port " + (process.env.PORT || 80));
});