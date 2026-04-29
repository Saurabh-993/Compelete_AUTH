import express from "express";

const router = express.Router();

router.get("/greet", async (req, res) => {
  res.render("greet");
});

export default router;
