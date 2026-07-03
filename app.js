const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => res.send("Travel-Mind API running"));
app.listen(port);
