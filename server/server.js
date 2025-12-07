const express = require('express');
const app = express();

app.get("/app", (req, res) => {
    res.json({ "fruits": ["apple", "banana", "orange"] });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});