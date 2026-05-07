import express from "express";
import tokenVerification from "../middlewares/tokenverifier.js";
import { adminRenderer } from "../controller/protected.routes.controller.js";
import protectedJWTverifier from "../middlewares/authorizedroutes.js";
import protectedAuthchecker from "../middlewares/authpermission.js";

const router = express.Router();

router.get("/admin", protectedJWTverifier, protectedAuthchecker, adminRenderer);

export default router;
