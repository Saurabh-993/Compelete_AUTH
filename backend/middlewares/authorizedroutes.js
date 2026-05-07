import express from "express";
import jwt from "jsonwebtoken";
import { SecretKey } from "../config/env.config.js";
import credential from "../models/usercredential.js";

export default async function protectedJWTverifier(req, res, next) {
  const token = req.cookies?.token;
  try {
    if (token) {
      const destructinfo = jwt.verify(token, SecretKey);
      const { username, role } = await credential.findOne(
        {
          username: destructinfo.username,
        },
        { username: 1, role: 1 },
      );
      req.user = { username: username, userrole: role };
      return next();
    }
    return res.redirect("/login");
  } catch (error) {
    res.send("Something went wrong! Please login again");
  }
}
