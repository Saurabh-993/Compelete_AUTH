import express from "express";

export async function adminRenderer(req, res) {
  res.render("protected.admin.ejs", { username: "lala", role: "admin" });
}

export async function managerRenderer(req, res) {
  res.render("protected.manager.ejs", { username: "bala", role: "manager" });
}

export async function userRenderer(req, res) {
  res.render("protected.user.ejs", { username: "kala", role: "user" });
}
