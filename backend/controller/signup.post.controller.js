import express from "express";
import credential from "../models/usercredential.js";
import { passwordEncrypter } from "../utils/password.encrypter.js";

async function userExistence(email) {
  const existingemail = await credential.findOne({ email: email });
  if (existingemail) {
    return true;
  }
  return false;
}

export default async function signUpRegisteror(req, res) {
  const { username, email, password } = req.body;
  const val = await userExistence(email);
  if (val) {
    res.redirect("/login");
  }
  const hashedPass = await passwordEncrypter(password);
  await credential.create({
    username: username,
    email: email,
    password: hashedPass,
  });
  res.render("greet");
}
