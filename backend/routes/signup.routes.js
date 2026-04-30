import express from "express";
import credential from "../models/usercredential.js";
import signUpRegisteror from "../controller/signup.post.controller.js";
import tokenVerification from "../middlewares/tokenverifier.js";
import tokenGenerator from "../middlewares/jwtgenerator.js";

const router = express.Router();

router.get("/signup", tokenVerification, async (req, res) => {
  res.render("signup");
});

router.post("/signup", signUpRegisteror, tokenGenerator, async (req, res) => {
  res.redirect("/greet");
});
export default router;
