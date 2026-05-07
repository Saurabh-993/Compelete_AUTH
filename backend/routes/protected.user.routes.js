import express from "express";

const router = express.Router();

router.get("/user", async (req, res) => {
  res.render("protected.user.ejs", { username: "lala", role: "user" });
});

export default router;
