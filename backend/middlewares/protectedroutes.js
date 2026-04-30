import express from "express";
import jwt from "jsonwebtoken";
import { SecretKey } from "../config/env.config.js";

export default async function protectedVerification(req, res, next) {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.redirect("/signup");
    }
    const decoder = jwt.verify(token, SecretKey);
    req.user = decoder;
    return next();
  } catch (error) {
    console.log("something wrong in Token Verification");
  }
}
