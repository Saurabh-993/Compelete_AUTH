import express from "express";
import helmet from "helmet";
import connectDB from "./backend/connection.DB.js";
import serverStarter, { app } from "./backend/server.js";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import signuprouter from "./backend/routes/signup.routes.js";
import loginrouter from "./backend/routes/login.routes.js";
import greetrouter from "./backend/routes/greet.routes.js";
import deleterouter from "./backend/routes/logout.routes.js";
app.use(helmet()); //It helps in sending the correct response status codes and protects the systems from attacks like XSS.

await connectDB();

//Setting the paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//setting the parsers
app.use(cookieParser()); //We are Just using it so we can read out the jwt that we will send through the cookies.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/backend/public")));

//Setting my view engine as EJS and also its location
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/backend/views"));

//Using the middleware on the routes
app.use("/", signuprouter);
app.use("/", loginrouter);
app.use("/", greetrouter);
app.use("/", deleterouter);

serverStarter();
