import express from "express";
import passwordChecker, {
  justLoginRender,
} from "../controller/login.post.controller.js";
import tokenGenerator from "../middlewares/jwtgenerator.js";
import tokenVerification from "../middlewares/tokenverifier.js";

const router = express.Router();

router.get("/login", tokenVerification, async (req, res) => {
  res.render("login.ejs");
});

router.post("/login", passwordChecker, tokenGenerator, justLoginRender);

export default router;
