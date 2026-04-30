import express from "express";
import credential from "../models/usercredential.js";
import signUpRegisteror from "../controller/signup.post.controller.js";
import tokenVerification from "../middlewares/tokenverifier.js";

const router = express.Router();

router.get("/signup", tokenVerification, async (req, res) => {
  res.render("signup");
});

router.post("/signup", signUpRegisteror);
export default router;
