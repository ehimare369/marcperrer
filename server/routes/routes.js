import { Router } from "express";

import homeRouter from "./home.js";
import aboutRouter from "./about.js";
import contactRouter from "./contact.js";
import serviceRouter from "./service.js";
import projectRouter from "./project.js";

// Handles all routes
const router = Router();

router.use("/", homeRouter);
router.use("/about", aboutRouter);
router.use("/contact", contactRouter);
router.use("/service", serviceRouter);
router.use("/project", projectRouter);

export default router;
