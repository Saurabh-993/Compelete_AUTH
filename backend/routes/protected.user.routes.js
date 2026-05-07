import express from "express";
import { userRenderer } from "../controller/protected.routes.controller.js";
import protectedJWTverifier from "../middlewares/authorizedroutes.js";
import protectedAuthchecker from "../middlewares/authpermission.js";

const router = express.Router();

router.get("/user", protectedJWTverifier, protectedAuthchecker, userRenderer);

export default router;
