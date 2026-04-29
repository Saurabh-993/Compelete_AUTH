import express from "express";
import passwordChecker from "../controller/login.post.controller.js";

const router = express.Router();

router.get("/login", async (req, res) => {
  res.render("login.ejs");
});

router.post("/login", passwordChecker);

export default router;
