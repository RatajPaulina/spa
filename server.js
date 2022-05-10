const express = require('express');
const path = require('path');

const PORT = 3000
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

app.listen(process.env.POTR || PORT, () => console.log("Server running http://localhost:3000/"))