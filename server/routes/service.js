import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("layouts/base", {
    template: "service",
  });
});

export default router;
