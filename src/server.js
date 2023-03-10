import express from "express";

import bodyParser from "body-parser";

import viewEngine from "./configs/viewEngine";

import initWebRoutes from "./routes/web";
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);


let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
