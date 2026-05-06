import express from "express";
import credential from "../models/usercredential.js";
const router = express.Router();

router.get("/delete", async function (req, res) {
  res.status(200).json({
    message:
      "bhai aap ko token khud se delte karna padega as server ke paas aapke header ka koi bhi control point nahi h, That's why JWT is called stateless",
  });
});

export default router;
