import express from "express";

const router = express.Router();

router.get("/admin", async (req, res) => {
  res.render("protected.admin.ejs", { username: "lala", role: "admin" });
});

export default router;
