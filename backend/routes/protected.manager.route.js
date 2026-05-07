import express from "express";
import { managerRenderer } from "../controller/protected.routes.controller.js";

const router = express.Router();

router.get("/manager", managerRenderer);

export default router;
