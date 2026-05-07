import express from "express";

const PERMISSIONS = {
  admin: ["admin", "manager", "user"],
  manager: ["manager", "user"],
  user: ["user"],
};

export default function protectedAuthChecker(req, res, next) {
  try {
    const role = req.user?.userrole;
    if (!role) return res.redirect("/login");

    const resource = req.path.split("/").filter(Boolean).pop();

    if (PERMISSIONS[role]?.includes(resource)) {
      return next();
    }

    return res.status(403).send("You aren't permitted to access this page");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Something went wrong");
  }
}
