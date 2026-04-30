import express from "express";
import credential from "../models/usercredential.js";
import jwt from "jsonwebtoken";
import { SecretKey } from "../config/env.config.js";

export default async function tokenVerification(req, res, next) {
  try {
    const token = req.cookies?.token;
    if (token) {
      const isverify = jwt.verify(token, SecretKey);
      req.user = isverify;
      if (isverify) {
        return res.redirect("/greet");
      }
    }
    return next();
  } catch (error) {
    console.log("something went wrong in Token Verification");
  }
}
