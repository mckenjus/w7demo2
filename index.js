const express = require("express");
const path = require("path");
const Rollbar = require("rollbar")

let rollbar = new Rollbar({
    accessToken: "61ce0b145ef6404d88cc72d16ddc6750",
    captureUncaught: true,
    captureUnhandledRejections: true
})
const app = express()

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
    Rollbar.info(`HTML file served successfully!`);
})

const port = process.env.PORT || 4545

app.listen(port, () => {
    console.log(`all ears on ${port}!`)
})