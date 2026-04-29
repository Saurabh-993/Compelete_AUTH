import express from "express";
import { passwordVerifier } from "../utils/password.verify.js";

export default async function passwordChecker(req, res) {
  const { email, password } = req.body;
  const isMatch = await passwordVerifier(password);
  if (isMatch) {
    return res.render("greet");
  }
  res.redirect("/signup");
}
