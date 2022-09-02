const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hello World!, this is a server");
});

app.listen(5000, () => {
    console.log("Listen on the port 5000...");
});