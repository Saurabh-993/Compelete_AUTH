import express from "express";
import { managerRenderer } from "../controller/protected.routes.controller.js";
import protectedJWTverifier from "../middlewares/authorizedroutes.js";
import protectedAuthchecker from "../middlewares/authpermission.js";

const router = express.Router();

router.get(
  "/manager",
  protectedJWTverifier,
  protectedAuthchecker,
  managerRenderer,
);

export default router;
