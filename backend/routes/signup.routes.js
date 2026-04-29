import express from "express";
import credential from "../models/usercredential.js";
import signUpRegisteror from "../controller/signup.post.controller.js";

const router = express.Router();

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.post("/signup", signUpRegisteror);
export default router;
