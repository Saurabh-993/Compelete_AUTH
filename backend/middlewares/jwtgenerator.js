//It will create jwt tokens for each login user

import express from "express";
import jwt from "jsonwebtoken";

jwt.sign(payload, secretkey);

// JWT me 2 types hote hain:

// Symmetric (HS256) → same secret sign + verify
// Asymmetric (RS256) → private key + public key

// 👉 RS256 me “secret” nahi, key pair use hota hai
