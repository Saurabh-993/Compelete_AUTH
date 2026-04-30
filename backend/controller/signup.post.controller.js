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

export default async function signUpRegisteror(req, res, next) {
  const { username, email, password } = req.body;
  const val = await userExistence(email);
  if (val) {
    return res.redirect("/login");
  }
  const hashedPass = await passwordEncrypter(password);
  await credential.create({
    username: username,
    email: email,
    password: hashedPass,
  });
  next();
}

//basically we have to add cookiegenerator as well as another redirector
