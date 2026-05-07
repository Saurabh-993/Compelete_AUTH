import express from "express";
import { userRenderer } from "../controller/protected.routes.controller.js";

const router = express.Router();

router.get("/user", userRenderer);

export default router;
