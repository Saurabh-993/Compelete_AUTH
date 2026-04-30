import express from "express";
import protectedVerification from "../middlewares/protectedroutes.js";

const router = express.Router();

router.get("/greet", protectedVerification, async (req, res) => {
  const username = req.user.username;
  
  res.render("greet", { username: username });
});

export default router;
