import express from "express";
import { sendEmail } from "../../controllers/EmailController.js";

const emailRoutes = express.Router();

emailRoutes.get("/email/send", sendEmail);

export default emailRoutes;