import express from "express";

export async function adminRenderer(req, res) {
  res.render("protected.admin.ejs", {
    username: req.user.username,
    role: req.user.userrole,
  });
}

export async function managerRenderer(req, res) {
  res.render("protected.manager.ejs", {
    username: req.user.username,
    role: req.user.userrole,
  });
}

export async function userRenderer(req, res) {
  res.render("protected.user.ejs", {
    username: req.user.username,
    role: req.user.userrole,
  });
}
