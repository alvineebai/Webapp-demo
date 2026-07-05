const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Alvine's Azure Demo!</h1><p>This app is running on Azure App Service.</p>");
});

app.get("/about", (req, res) => {
    res.send("This is my first Azure web application.");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
