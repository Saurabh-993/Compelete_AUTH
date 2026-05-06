import express from "express";
import { passwordVerifier } from "../utils/password.verify.js";
import credential from "../models/usercredential.js";

export default async function passwordChecker(req, res, next) {
  const { email, password } = req.body;
  const hashobj = await credential.findOne(
    { email: email },
    { _id: 0, password: 1 },
  );
  if (!hashobj) {
    return res.redirect("/signup");
  }
  const storedHashDB = hashobj.password;
  const isMatch = await passwordVerifier(password, storedHashDB);

  if (isMatch) {
    return next();
  }
  res.redirect("/signup");
}

export async function justLoginRender(req, res) {
  res.redirect("/greet");
}
