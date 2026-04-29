import express from "express";
import credential from "../models/usercredential.js";
const router = express.Router();

router.get("/delete", async function (req, res) {
  res.redirect("/login");
});

router.post("/delete", async function (req, res) {
    
});

export default router;
