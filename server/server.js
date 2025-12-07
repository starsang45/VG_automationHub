const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173'
};
app.use(cors(corsOptions))

app.get("/app", (req, res) => {
    res.json({ "fruits": ["apple", "strawberry", "orange"] });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});