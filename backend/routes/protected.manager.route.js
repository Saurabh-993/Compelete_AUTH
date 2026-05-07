import express from "express";

const router = express.Router();

router.get("/manager", async (req, res) => {
  res.render("protected.manager.ejs", { username: "lala", role: "manager" });
});

export default router;
