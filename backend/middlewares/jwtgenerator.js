//It will create jwt tokens for each login user

import express from "express";
import jwt from "jsonwebtoken";
import { SecretKey } from "../config/env.config.js";
import credential from "../models/usercredential.js";

export default async function tokenGenerator(req, res, next) {
  const { email, password } = req.body;
  const { username } = await credential.findOne(
    { email: email },
    { _id: 0, username: 1 },
  );
  const token = jwt.sign({ username: username }, SecretKey);
  res.cookie("token", token);
  next();
}

// JWT me 2 types hote hain:

// Symmetric (HS256) → same secret sign + verify
// Asymmetric (RS256) → private key + public key

// 👉 RS256 me “secret” nahi, key pair use hota hai
