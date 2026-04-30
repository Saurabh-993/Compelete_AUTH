import express from "express";
import credential from "../models/usercredential.js";
const router = express.Router();

router.get("/delete", async function (req, res) {
  res.clearCookie("token");
  res.redirect("/login");
});

export default router;
