"use strict";

const express = require("express");

const port = 8001;
const applicationName = "vamp(ire)!";
const serverStartMessage = `${applicationName} running on port ${port}`;

const staticFilePath = __dirname + "/client";

const app = express();
app.use("/", express.static(staticFilePath));

const server = app.listen(port, function() {
    console.log(serverStartMessage);
});