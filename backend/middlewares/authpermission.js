import express from "express";

export default async function protectedAuthchecker(req, res, next) {
  const role = req.user.userrole;
  const path = req.path.split("/").at(-1); //modern javascript support negative indexes with the help of at function.
  try {
    if (role === "admin") return next();
    else if (role === "manager" && (path === "manager" || path === "user")) {
      return next();
    } else if (path === "user") return next();
    return res.send("You aren't permitted to access this page");
  } catch (error) {
    return res.status(500).send("Something went wrong");
  }
}
